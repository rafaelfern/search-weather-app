// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiUrl, apiKey } from '../utils/variables'

type Data = {
  name: string
}

export default async function weather(req: NextApiRequest,res: NextApiResponse<Data | string>) {
    try {
        if(apiUrl && apiKey){
            const bodyContent = req.body
            const current_url = `${apiUrl}?q=${bodyContent}&appid=${apiKey}&lang=pt_br&units=metric`
            const response = await fetch(current_url)
            const jsonData = await response.json()
            
            jsonData.sys.sunrise = formatTimestampToHour(jsonData.sys.sunrise)
            jsonData.sys.sunset = formatTimestampToHour(jsonData.sys.sunset)
            jsonData.timezone = 7200

            jsonData.weather[0].color = verifyCardColorByIcon(jsonData.weather[0].icon)
            console.log("___________",jsonData)

            if(jsonData) {
                res.status(200).json(jsonData)
            }
        }
    }catch(e){
        console.log("ERROR",e)
        res.status(500).send('Erro ao acessar api do Weather API');
    }
}

const formatTimestampToHour = (timestamp: number) => {
    const date = new Date(timestamp)
    const hour = date.getHours().toString().padStart(2, '0')
    const min = date.getMinutes().toString().padStart(2, '0')
    return `${hour}:${min}`
}

const verifyCardColorByIcon = (icon: string) => {
    const colorCard:any = {
        '02d': 'bg-weatherColor_1',
        '01d': 'bg-weatherColor_2',
        '03d': 'bg-weatherColor_8',
        '04d': 'bg-weatherColor_3',
        '09d': 'bg-weatherColor_9',
        '10d': 'bg-weatherColor_7',
        '11d': 'bg-weatherColor_10',
        '13d': 'bg-weatherColor_11',
        '50d': 'bg-weatherColor_12',
        '10n': 'bg-weatherColor_4',
        '50n': 'bg-weatherColor_5',
        '04n': 'bg-weatherColor_6',
    }

    return `${colorCard[icon]}`
}
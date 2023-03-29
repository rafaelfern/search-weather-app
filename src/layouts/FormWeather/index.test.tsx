import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FormWeather, { IFormWeatherProps } from './index'

const props: IFormWeatherProps = {
    handleSubmit: () => {},
    inputRef: undefined
}

describe('<Home />', () => {
    it('should render the component an header title', () => {
        const { container } = render(<FormWeather {...props} />);
        const heading = screen.getByRole('heading', {
            name: /search Weather/i
        })

        expect(heading).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })
})
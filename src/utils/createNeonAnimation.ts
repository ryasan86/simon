import { keyframes } from 'styled-components'

const createNeonAnimation = color => keyframes`
        from {
            box-shadow:
                0 0 5px white,
                0 0 10px white,
                0 0 15px white,
                0 0 20px ${color},
                0 0 35px ${color},
                0 0 40px ${color},
                0 0 50px ${color},
                0 0 75px ${color};
        }

        to {
            box-shadow:
                0 0 10px white,
                0 0 20px white,
                0 0 30px white,
                0 0 40px ${color},
                0 0 70px ${color},
                0 0 80px ${color},
                0 0 100px ${color},
                0 0 150px ${color};
        }
`

export { createNeonAnimation }

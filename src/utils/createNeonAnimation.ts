import { keyframes } from 'styled-components'

import { lighten } from 'polished'

const createNeonAnimation = (color: string): void => keyframes`
        0% {
            background: ${color};
            border: 0;
            box-shadow: 0;
            transform: scale(1);
        }

        50% {
            background: ${lighten(0.3, color)};
            border: 3px solid white;
            box-shadow:
                0 0 10px white,
                0 0 20px white,
                0 0 30px white,
                0 0 40px ${color},
                0 0 70px ${color},
                0 0 80px ${color},
                0 0 100px ${color},
                0 0 150px ${color};
            transform: scale(1.1);
        }

        100% {
            background: ${color};
            border: 0;
            box-shadow: 0;
            transform: scale(1);
        }
`

export { createNeonAnimation }

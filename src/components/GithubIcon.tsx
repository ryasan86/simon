import React, { useState } from 'react'
import { githubRepoUrl } from '../constants'
import { GH_ICON } from '../images'

import { Icon } from '../styles'
import { idle } from '../utils'

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => {
    const [isAnimating, setIsAnimating] = useState(false)

    const handleMouseEnter = async () => {
        if (!isAnimating) {
            setIsAnimating(true)
            await idle(1000)
            setIsAnimating(false)
        }
    }

    return (
        <Icon
            href={githubRepoUrl}
            className={className}
            isAnimating={isAnimating}
            onMouseEnter={handleMouseEnter}>
            <Icon.Img src={GH_ICON} alt='github' />
        </Icon>
    )
}

export default GithubIcon

import React, { useState, useEffect, useCallback } from 'react'

import { Announcement } from '../styles'
import { idle, random } from '../utils'

const messages = [
    'Great!',
    'Good Job :)',
    'Excellent',
    'Keep It Going!',
    "Don't Stop Now!"
]

const AnnouncementComponent: React.FC<{ score: number }> = ({ score }) => {
    const [message, setMessage] = useState('')
    const [isAnimating, setIsAnimating] = useState(false)

    const setRandomMessage = useCallback(() => {
        let m = random(messages)
        setMessage(prev => {
            while (m === prev) m = random(messages)
            return m
        })
    }, [])

    useEffect(() => {
        if (score) {
            setRandomMessage()
            setIsAnimating(true)
            idle(1500).then(() => setIsAnimating(false))
        }
    }, [score, setRandomMessage])

    return (
        <Announcement>
            <Announcement.Text isAnimating={isAnimating}>
                {message}
            </Announcement.Text>
        </Announcement>
    )
}

export default AnnouncementComponent

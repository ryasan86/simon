const playSound = (audioUrl: string): void => {
    const audio = new Audio(audioUrl)
    audio.play()
}

export { playSound }

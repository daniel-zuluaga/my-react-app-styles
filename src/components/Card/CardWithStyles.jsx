

const CardWithStyles = () => {
    const textStyles = {
        color: "blue",
        fontSize: "2rem",
        fontWeight: "bold",
        textAlign: "center",
    }
    return (
        <div>
            <h2 style={textStyles} >Pikachu</h2>
            <p>Pikachu is a Pokémon species in Nintendo and Game Freak's Pokémon media franchise, and the franchise's mascot. First introduced in the video games Pokémon Red and Blue, it was created by Atsuko Nishida at the request of lead designer Ken Sugimori, with the design finalized by Sugimori.</p>
        </div>
    );
}

export { CardWithStyles };
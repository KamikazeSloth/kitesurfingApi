
function mapKites(source) {

    const mappedKites = []

    for (const kite of source) {

        let mappedKite = {
            id: "",
            brand: "",
            model: "",
            name: ""
        }

        mappedKite.id = kite.id
        mappedKite.brand = kite.brand
        mappedKite.model = kite.model
        mappedKite.name = kite.brand + " " + kite.model

        mappedKites.push(mappedKite)
    }

    return mappedKites
}

module.exports = { mapKites }
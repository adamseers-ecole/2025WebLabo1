export class Towel {
    constructor(public color : string, public length: number, public image: string, public wet: boolean = false) {}

    use() : string {
        return this.wet ? "Ça ne fonctionne pas..." : "La cible est maintenant sèche."
    }
}
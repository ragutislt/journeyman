import VisitObject from './VisitObject';

class Itinerary {
    constructor(public id: number, public title: string, public duration: string, public objects: VisitObject[]) { }

    public get totalDistance(): number {
        return this.objects.map(x => x.distance).reduce((sum, current) => {
            return sum + current;
        })
    }
}

export default Itinerary;
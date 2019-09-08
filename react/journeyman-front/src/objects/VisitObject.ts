enum ObjectType {
	city = "city",
	ent = "entertainment"
}

class VisitObject {
	constructor(
		public id: number,
		public title: string,
		public distance: number,
		public time: string,
		public type: ObjectType,
		public coordinates: {
			lat: number,
			lng: number
		},
		public url: string,
		public image: string,
		public description: string
	) { }
};

export default VisitObject;
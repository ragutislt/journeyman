class VisitObject {
	constructor(
		public id: number,
		public title: string,
		public distance: number,
		public time: string,
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
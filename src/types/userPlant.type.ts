export interface UserPlant {
  _id: string;
  plant_id: string; // plant id
  uid: string; // user who saved this plant
  have: boolean;
  want: boolean;
  location: string;
  comment: string;
}

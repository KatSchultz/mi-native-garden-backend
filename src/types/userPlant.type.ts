export interface UserPlant {
  id: string; // plant id
  uid: string; // user who saved this plant
  have: boolean;
  want: boolean;
  location: string;
}

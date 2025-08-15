export interface Wand {
  wood?: string;
  core?: string;
  length?: string | number;
}

export interface Character {
  name: string;
  alternate_names?: string[];
  house?: string;
  dateOfBirth?: string;
  ancestry?: string;
  eyeColour?: string;
  hairColour?: string;
  wand?: Wand;
  patronus?: string;
  actor?: string;
}

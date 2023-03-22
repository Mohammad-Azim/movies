export class card {
  id!: number;
  title!: string;
  year!: string;
  time!: string;
  category: string[];
  constructor(
    id: number,
    title: string,
    year: string,
    time: string,
    category: string[]
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.time = time;
    this.category = category;
  }
}

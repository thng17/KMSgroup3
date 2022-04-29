export class Task {
    id?: string;
    title: string;
    done: boolean;
    rating: number;
  
    constructor(title: string) {
      this.title = title;
      this.done = false;
      this.rating = 1;
    }
  }
  
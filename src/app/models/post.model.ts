export class Post {

  created_at: number;

  constructor(
    public title: string,
    public content: string,
    public loveIts: number
  ) {
    let currentDate = new Date();
    this.created_at = currentDate.getTime();
  }

}
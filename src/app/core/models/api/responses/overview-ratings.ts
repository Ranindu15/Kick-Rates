
export class ItemRating {
  total_count: number;
  comments: MenuItemComment[];
  constructor() {
    this.total_count = 34
    this.comments = []
  }
}

export class MenuItemComment {
  comment: string;
  rated_timestamp: string;
  rating: number;
  constructor() {
    this.comment = 'dsjgd'
    this.rated_timestamp = '63-3792'
    this.rating = 34
  }
}

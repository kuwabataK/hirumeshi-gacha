import { observable } from 'mobx'
import moment from 'moment'

export class RestaurantStore {
  @observable restaurants: {
    [key: string]: LaunchStoreClasses.Restaurant
  } = {}
}

export namespace LaunchStoreClasses {
  export class Restaurant {
    id: string = ''
    title: string = ''
    description: string = ''
    location: string = ''
    holidays: Days[] = []
    businessHours = {
      from: moment('10:00:00', 'HH:mm:ss'),
      to: moment('22:00:00', 'HH:mm:ss')
    }
  }

  export type Days =
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday'
}

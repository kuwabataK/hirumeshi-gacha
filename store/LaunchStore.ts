import { observable } from "mobx";
import moment from "moment";

export class RestaurantStore {
    @observable restaurants: {[key:string]:Restaurant} = {}
}

class Restaurant{
    id: string = ''
    title: string = ''
    description: string = ''
    coordinate: string = ''
    holidays: Days[] = []
    businessHours = {
        from: moment("10:00:00", 'HH:mm:ss'),
        to: moment("22:00:00", 'HH:mm:ss')
    }
}

type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'
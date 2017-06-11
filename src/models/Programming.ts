/**
 * Created by enea on 11/06/2017.
 */
import {Movie} from "./Movie";

export class Programming{

    public id: number;
    public limit: number;
    public occupied: number;
    public movies: Movie;
    public release_at: Date;
    public room: String;

    public releaseAt( ): String{
        let date = new Date(this.release_at);
        return `${date.getHours()}:${date.getMinutes()}`;
    }
}
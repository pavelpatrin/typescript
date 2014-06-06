/**
 * Created by pavelpat on 03.06.14.
 */

interface Mover
{
    move(): void;

    getStatus(): {
        speed: number;
    };
}

interface Shaker
{
    shake(): void;

    getStatus(): {
        frequency: number;
    };
}

interface MoverShaker extends Mover, Shaker
{
    getStatus(): {
        speed: number;
        frequency: number;
    };
}


class MoverShakerImpl implements MoverShaker
{
    public move()
    {
    }

    public shake()
    {
    }

    public getStatus()
    {
        return {
            speed: 100,
            frequency: 200
        };
    }
}
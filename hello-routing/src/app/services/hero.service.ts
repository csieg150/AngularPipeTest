import {Injectable} from '@angular/core';
import {ISuperHero} from '../hero-list/hero';

/**
 * Dependency Injection: a part of a larger concept in Angular called IoC
 * Inversion of Control - we give up control as developers, and give it
 * to something else in the framework. (In angular it is the Injector)
 *
 * Singleton Class - an class that can only be instantiated once.
 * Any time you call the constructor after it's already instantiated, it'll just
 * find the object in memory, then return it.
 *
 * DI - (Depend Inject) - is a design pattern like DAO and such. The Angular
 * Injector is the entity that controls it. Classes with the @Injectable
 * decorator and the @Component (default includes it) are handled by
 * the Injector. Handled 'eagerly', meaning it handles it at the application start.
 * Lazy is when it initializes when it's absolutely needed.
 */

@Injectable()
export class HeroService{
    /**
     * How to create a service:
     * 1 - create an exportable TS class
     * 2 - put an @Injectable() above the class name
     * 3 - register it in the 'PROVIDERS' attribute in the app.module
     */

    getCharacters(): ISuperHero[]{
        return [
            {
                name: 'Frozone',
                rank: 4,
                ability: 'cold generation',
                organization: 'incredibles',
                image: 'http://www.cultjer.com/img/ug_photo/2014_03/sf2_lg20140331142439.jpg'
            },
            {
                name: 'Eraser Head',
                rank: 5,
                ability: 'power nullification',
                organization: 'pro hero',
                image: 'https://media.tenor.co/images/788cc935108fb487b6af1e152bcec6bf/raw'
            },
            {
                name: 'Static Shock',
                rank: 4.7,
                ability: 'electric manipulation',
                organization: 'duo',
                image: 'https://t00.deviantart.net/CsfqTmmnwQAltUe4HYS8A7gsk-s=/300x200/filters:fixed_height(100,100)' +
                    ':origin()/pre00/64ea/th/pre/f/2012/125/4/1/static_shock_by_deshockwav-d4ynm1o.png'
            },
            {
                name: 'Saitama',
                rank: 2.3,
                ability: 'punches',
                organization: 'the hero association',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnx0maPoLAqImOmsoTnxRwBronngiLYfeOVYFSSs2UBLsjXDDT&s'
            }
        ];
    }
}

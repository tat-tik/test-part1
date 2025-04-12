import {gamerHealth} from '../gamerhealth.js';

test('gamerHealth test for healthy', () => {
        const gamers_list = 
        {
        name: 'Маг',
        health: 90
    };
        
        const result = gamerHealth(gamers_list);
        expect(result).toBe('healthy');
    }
    );

    test('gamerHealth test for wounded', () => {
        const gamers_list = 
        {
        name: 'Лучник',
        health: 40
    };
        
        const result = gamerHealth(gamers_list);
        expect(result).toBe('wounded');
    }
    );

    test('gamerHealth test for critical', () => {
        const gamers_list = 
        {
        name: 'Мечник',
        health: 10
    };
        
        const result = gamerHealth(gamers_list);
        expect(result).toBe('critical');
    }
    );



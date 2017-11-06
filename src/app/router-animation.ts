import { trigger, transition, animate, style } from '@angular/animations';

export const routeAnimation = trigger('routerTransition', [
    transition(':enter', [
        style({ opacity: 0, zIndex: 90 }),
        animate('500ms ease-in', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 1, zIndex: 80 }),
        animate('500ms ease-in', style({ opacity: 0 }))
    ])
]);

// export const routeAnimationOld = trigger('routerTransition', [
//     transition(':enter', [
//         style({ left: '100%', position: 'absolute', top: '2rem', width: '100%', zIndex: 90 }),
//         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ left: '0' }))
//     ]),
//     transition(':leave', [
//         style({ left: '0', position: 'absolute', top: '2rem', width: '100%', zIndex: 80 }),
//         animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ left: '-100%' }))
//     ])
// ]);

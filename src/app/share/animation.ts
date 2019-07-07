import { AnimationTriggerMetadata, trigger, state, style, animate, transition } from '@angular/animations'

export const dialogFadeAnimation: AnimationTriggerMetadata = trigger(
  'dialogFadeAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
    })),
    state('false', style({
      opacity: 0,
      visibility: 'hidden',
    })),
    state('true', style({
      opacity: 1,
      visibility: 'visible',
      transform: 'translate3D(0, 0, 0)',
    })),
    transition('* <=> *', animate(`250ms ease-in-out`)),
  ])

export const maskFadeAnimation: AnimationTriggerMetadata = trigger(
  'maskFadeAnimation', [
    state('*', style({
      opacity: 0,
      visibility: 'hidden',
      transform: 'translate3D(0, -15px, 0)'
    })),
    state('false', style({
      opacity: 0,
      transform: 'translate3D(0, -15px, 0)',
      visibility: 'hidden',
    })),
    state('true', style({
      opacity: 1,
      transform: 'translate3D(0, 0, 0)',
      visibility: 'visible',
    })),
    transition('* <=> *', animate(`250ms ease-in-out`)),
  ]
)

export const toastAnimation : AnimationTriggerMetadata = trigger(
  'toastAnimation', [
    state('*', style({
      transform: 'translate3D(0, 15px, 0)'
    })),
    
  ]
)
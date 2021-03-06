/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2016/11/28.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('stories',{
      url: '/stories/:wallId',
      template: require('../partials/stories.html'),
      controller: 'StoriesController',
      controllerAs: 'stories'
    });
}
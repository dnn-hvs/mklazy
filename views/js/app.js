'use strict';

(function () {
    function init() {
        var router = new Router([
            // new Route('home', 'home.html', true),
            new Route('login', 'login.html'),
            new Route('register', 'register.html'),

            new Route('upload', 'upload.html'),
            new Route('help', 'help.html'),
            new Route('question', 'question.html'),


            // new Route('placement', 'placements.html'),
            // new Route('latestnews', 'subpages/activities/latestnews.html'),
            // new Route('events', 'subpages/activities/events.html'),
            // new Route('faculty', 'subpages/people/faculty.html'),
            // new Route('visitors', 'subpages/people/visitors.html'),
            // new Route('admissions', 'subpages/academics/admissions.html'),
            // new Route('programs', 'subpages/academics/programs.html'),
            // new Route('syllabus', 'subpages/academics/syllabus.html'),


        ]);
    }
    init();
}());
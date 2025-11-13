// Academic terminal initialization (only runs when #terminal exists)
// Provides: command registry, dynamic help, history persistence, theme sync.
(function () {
  if (typeof jQuery === 'undefined') {
    console.warn('[academic-terminal] jQuery missing; abort init');
    return;
  }
  jQuery(function ($) {
    var $el = $('#terminal');
    if ($el.length === 0) return;

    // Persistent history key
    var STORAGE_KEY = 'academic_terminal_history_v1';
    var savedHistory = [];
    try { savedHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch (e) { }

    // Command definitions
    var commands = {
      help: function () {
        this.echo('Available commands:\n' + Object.keys(commands).sort().join('\n'));
      },
      about: function () {
        this.echo('Yuchen You 游宇宸, Undergraduate Student at University of Michigan, major in Computer Science.');
      },
      projects: function () {
        this.echo([
          'Agentic Distributed Systems Ops (OrderLab)',
          'CUDA Graph Proxy Player',
          'LightEMMA Edge-Cloud VLM',
          'Origami Inspired Soft Robotic Arm: a Platform for Modular Manipulation',
          '> Click the project links in the title bar to read more!',
        ].join('\n'));
      },
      chinese: function () {
        this.echo([
          '中文还是太伟大了, 可惜小白小黑看不懂, 只能做成英文的了',
          '建议下一个 Google Translate 插件, 这样我就不用用中文重新写一次了'
        ].join('\n'));
      },
      languages: function () {
        this.echo([
          'C/C++',
          'Rust',
          'Golang',
          'Python',
          'Shellscript',
          'Java',
          'MATLAB',
        ].join('\n'));
      },
      hobbies: function () {
        this.echo([
          'Reading? NO',
          'Traveling',
          'Coding'
        ].join('\n'));
      },
      contact: function () {
        this.echo([
          'UMich Email: yuchenxr@umich.edu',
          'SJTU Email: wesley_you@sjtu.edu.cn',
          `LinkedIn: https://www.linkedin.com/in/yuchen-you-a74940314/`
        ].join('\n'));
      },
      clear: function () { this.clear(); },
      theme: function (arg) {
        if (!arg) {
          this.echo('Current theme: ' + (jQuery('html').attr('data-theme') || 'light'));
          return;
        }
        if (arg !== 'light' && arg !== 'dark') {
          this.error('Usage: theme [light|dark]');
          return;
        }
        localStorage.setItem('theme', arg);
        // Trigger site theme change
        if (typeof window.setTheme === 'function') {
          window.setTheme(arg);
        } else {
          jQuery('html').attr('data-theme', arg === 'dark' ? 'dark' : null);
        }
        this.echo('Switched theme to ' + arg);
        // Force footer recalculation
        try { window.dispatchEvent(new Event('resize')); } catch (e) { $(window).trigger('resize'); }
      }
    };

    var term = $el.terminal(function (command, termInstance) {
      command = command.trim();
      if (!command) return;
      var parts = command.split(/\s+/);
      var cmd = parts[0];
      var arg = parts.slice(1).join(' ');
      if (commands[cmd]) {
        commands[cmd].call(termInstance, arg);
      } else {
        termInstance.error('Unknown command: ' + cmd + ' (type `help`)');
      }
    }, {
      greetings: 'Welcome to my academic terminal.\nType `help` to list commands.',
      name: 'academic_terminal',
      prompt: 'you> ',
      history: true,
      onInit: function () {
        // Restore history
        if (savedHistory.length) {
          for (var i = 0; i < savedHistory.length; i++) {
            this.history().data().push(savedHistory[i]);
          }
        }
      },
      onCommand: function (cmd) {
        // Persist history
        try {
          var hist = this.history().data();
          localStorage.setItem(STORAGE_KEY, JSON.stringify(hist));
        } catch (e) { }
      }
    });

    // Auto complete with command names
    term.setCompletion(Object.keys(commands));

    // Recompute footer position
    try { window.dispatchEvent(new Event('resize')); } catch (e) { $(window).trigger('resize'); }
  });
})();
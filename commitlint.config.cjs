module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'chore', 'style', 'refactor', 'docs', 'test', 'perf', 'revert'],
    ],
    'subject-max-length': [2, 'always', 100],
  },
}

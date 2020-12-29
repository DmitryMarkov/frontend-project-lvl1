# Makefile
install:
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

.PHONY: test log

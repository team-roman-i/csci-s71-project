all: test

test: test-frontend test-backend

test-frontend:
	cd frontend && yarn run test

test-backend:
	@echo Nothing to test on backend yet

.PHONY: all test test-frontend test-backend


NG=./node_modules/@angular/cli/bin/ng
SOURCES=$(shell find ./src -type f -iname '*.ts' -or -iname '*.html' -or -iname '*.css') tsconfig.json tslint.json yarn.lock package.json

.PHONY: run
run:
	yarn
	$(NG) serve -w -sm -aot -bh /admin/

dist: $(SOURCES)
	$(NG) build --prod -aot --base-href /admin/ -d static

.PHONY: clean
clean:
	rm -rv dist


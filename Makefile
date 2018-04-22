NG=./node_modules/@angular/cli/bin/ng

.PHONY: run
run:
	yarn
	$(NG) serve -w -sm -aot -bh /admin/

.PHONY: dist
dist:
	$(NG) build --prod -aot --base-href /admin/ -d static

.PHONY: clean
clean:
	rm -rv dist


module rush

go 1.14

require (
	github.com/PuerkitoBio/goquery v1.5.1
	github.com/andybalholm/brotli v1.0.0
	github.com/avast/retry-go v3.0.0+incompatible
	github.com/chromedp/cdproto v0.0.0-20200209033844-7e00b02ea7d2
	github.com/chromedp/chromedp v0.5.3
	github.com/codahale/hdrhistogram v0.0.0-20161010025455-3a0bb77429bd // indirect
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/elazarl/goproxy v0.0.0-20200310082302-296d8939dc5a
	github.com/getsentry/sentry-go v0.5.1
	github.com/go-redis/redis/v8 v8.0.0-beta.10
	github.com/go-zeromq/zmq4 v0.9.0
	github.com/gobwas/ws v1.0.3 // indirect
	github.com/google/uuid v1.1.1
	github.com/gorilla/handlers v1.4.2
	github.com/gorilla/websocket v1.4.1
	github.com/mailru/easyjson v0.7.1 // indirect
	github.com/mattn/go-sqlite3 v2.0.3+incompatible
	github.com/minio/minio-go/v7 v7.0.4
	github.com/opentracing-contrib/go-grpc v0.0.0-20191001143057-db30781987df // indirect
	github.com/pkg/errors v0.9.1
	github.com/refraction-networking/utls v0.0.0-20200601200209-ada0bb9b38a0
	github.com/streadway/simpleuuid v0.0.0-20130420165545-6617b501e485
	github.com/stretchr/testify v1.6.1
	github.com/stripe/stripe-go/v71 v71.14.0
	github.com/uber/jaeger-client-go v2.22.1+incompatible // indirect
	github.com/uber/jaeger-lib v2.2.0+incompatible // indirect
	go.uber.org/atomic v1.5.0 // indirect
	golang.org/x/net v0.0.0-20200707034311-ab3426394381
	golang.org/x/sys v0.0.0-20201207223542-d4d67f95c62d // indirect
	google.golang.org/grpc v1.28.0 // indirect
	gopkg.in/square/go-jose.v2 v2.5.1
	gopkg.in/src-d/go-vitess.v1 v1.8.0
	nhooyr.io/websocket v1.8.6
	syreclabs.com/go/faker v1.2.1
)

replace golang.org/x/net => ../golang.org/x/net

replace github.com/refraction-networking/utls => ../github.com/refraction-networking/utls

package task

import (
	"encoding/json"
	"math/rand"
	"fmt"
	"io/ioutil"
	"net/url"
	// "strings"
	// "rush/net/http"
	"log"
)
type TwProducts struct {
	SearchText   string `json:"searchText"`
	CategoryName string `json:"categoryName"`
	Pagination   struct {
		Page         int `json:"page"`
		PageSize     int `json:"pageSize"`
		TotalPages   int `json:"totalPages"`
		TotalResults int `json:"totalResults"`
	} `json:"pagination"`
	Facets []struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		MultiSelect bool   `json:"multiSelect"`
		Priority    int    `json:"priority"`
		Values      []struct {
			ID       string `json:"id"`
			Name     string `json:"name"`
			Count    int    `json:"count"`
			Selected bool   `json:"selected"`
			Priority int    `json:"priority"`
		} `json:"values"`
	} `json:"facets"`
	Sorts []struct {
		ID       string `json:"id"`
		Name     string `json:"name"`
		Selected bool   `json:"selected"`
	} `json:"sorts"`
	RedirectionURL string `json:"redirectionUrl"`
	Products       []struct {
		Bay   string `json:"bay"`
		Brand struct {
			ID   string `json:"id"`
			Name string `json:"name"`
		} `json:"brand"`
		Categories []struct {
			ID            string `json:"id"`
			Name          string `json:"name"`
			Type          string `json:"type"`
			URL           string `json:"url"`
			StorefrontURL string `json:"storefrontUrl"`
		} `json:"categories"`
		ContainerType         string  `json:"containerType"`
		CustomerAverageRating float64 `json:"customerAverageRating"`
		CustomerReviewsCount  int     `json:"customerReviewsCount"`
		Department            string  `json:"department"`
		DirectType            string  `json:"directType"`
		ID                    string  `json:"id"`
		Images                []struct {
			ImageType          string `json:"imageType"`
			MobileOptimizedURL string `json:"mobileOptimizedUrl"`
			ThumbnailURL       string `json:"thumbnailUrl"`
			URL                string `json:"url"`
			ZoomImageURL       string `json:"zoomImageUrl"`
			AltText            string `json:"altText"`
		} `json:"images"`
		Location           string   `json:"location"`
		Merchbadge         []string `json:"merchbadge,omitempty"`
		Name               string   `json:"name"`
		PackageDescription string   `json:"packageDescription"`
		PackageValue       string   `json:"packageValue"`
		Price              []struct {
			Price   float64 `json:"price"`
			Type    string  `json:"type"`
			ToolTip string  `json:"toolTip,omitempty"`
		} `json:"price"`
		ProductURL    string `json:"productUrl"`
		Review        string `json:"review"`
		Rating        int    `json:"rating"`
		RatingSource  string `json:"ratingSource,omitempty"`
		SalesStrategy struct {
			Name string `json:"name"`
		} `json:"salesStrategy"`
		ShoppingOptions []struct {
			Eligible bool   `json:"eligible"`
			Location string `json:"location"`
			Type     string `json:"type"`
			Selected bool   `json:"selected"`
		} `json:"shoppingOptions"`
		SkuID      string `json:"skuId"`
		StockLevel []struct {
			PurchaseLimit int `json:"purchaseLimit"`
			Stock         int `json:"stock"`
		} `json:"stockLevel"`
		StoreBadges []struct {
			BadgeCode                 string `json:"badgeCode"`
			BadgeName                 string `json:"badgeName"`
			BadgeType                 string `json:"badgeType"`
			BadgeSubType              string `json:"badgeSubType"`
			BadgeTooltip              string `json:"badgeTooltip"`
			BadgePromotionDescription string `json:"badgePromotionDescription"`
		} `json:"storeBadges,omitempty"`
		StoreDistance    float64 `json:"storeDistance"`
		StoreID          string  `json:"storeId"`
		StoreName        string  `json:"storeName"`
		ItemTasteProfile string  `json:"itemTasteProfile"`
		ItemStyle        string  `json:"itemStyle"`
		ItemBody         string  `json:"itemBody"`
		Transactional    bool    `json:"transactional"`
		Type             string  `json:"type"`
		Volume           string  `json:"volume"`
		StockMessages    struct {
			Messages []struct {
				ShoppingMethod   string `json:"shoppingMethod"`
				StockMessage     string `json:"stockMessage"`
				AddToCartMessage string `json:"addToCartMessage"`
				AddToCartStatus  bool   `json:"addToCartStatus"`
			} `json:"messages"`
			DigitalTransactional      bool `json:"digitalTransactional"`
			DigitalInventoryQuantity  int  `json:"digitalInventoryQuantity"`
			DigitalSpecialOrder       bool `json:"digitalSpecialOrder"`
			DigitalLongTermOOS        bool `json:"digitalLongTermOOS"`
			DigitalLimitedStock       bool `json:"digitalLimitedStock"`
			DigitalInStock            bool `json:"digitalInStock"`
			DigitalStoreQuantity      int  `json:"digitalStoreQuantity"`
			ShippingTransactional     bool `json:"shippingTransactional"`
			ShippingInventoryQuantity int  `json:"shippingInventoryQuantity"`
			ShippingSpecialOrder      bool `json:"shippingSpecialOrder"`
			ShippingLongTermOOS       bool `json:"shippingLongTermOOS"`
			ShippingLimitedStock      bool `json:"shippingLimitedStock"`
			ShippingInStock           bool `json:"shippingInStock"`
			ShippingStoreQuantity     int  `json:"shippingStoreQuantity"`
			DigitalDeliveryEligible   bool `json:"digitalDeliveryEligible"`
		} `json:"stockMessages"`
		TopSellerBadge struct {
			BadgeText string `json:"badgeText"`
		} `json:"topSellerBadge,omitempty"`
	} `json:"products"`
	AutoCorrect struct {
	} `json:"autoCorrect"`
	CategoryBreadcrumbs []struct {
		URL          string `json:"url"`
		Name         string `json:"name"`
		CategoryCode string `json:"categoryCode"`
	} `json:"categoryBreadcrumbs"`
	SeoMetaData []struct {
		Name    string `json:"name"`
		Content string `json:"content"`
	} `json:"seoMetaData"`
	SearchAllStores bool `json:"searchAllStores"`
	IsRelaxed       bool `json:"isRelaxed"`
}

func (t *CheckoutTask) TwGenPxCookie() error {
	var proxy string
	if t.Proxy != nil {
		proxy = t.Proxy.String()
	}
	// ckies, err := GetPxCookie(Px3Request{
	ckies, err := t.GetPxCookieApi(Px3Request{
		Proxy: proxy,
		Cookie: t.CookiesStr(),
		Url: t.Url.String(),
		// TODO cookies. can regenning help avoid 8min limit on checkout poll?
		AppId: "PXFF0j69T5",
		Vid: "",
		Uuid: "",
		Host: "",
		JsSrc: "https://www.totalwine.com/FF0j69T5/init.js",
		CapJsSrc: "",
	})
	if err != nil {
		return err
	}

	for _, ckie := range ckies {
		t.SetCookie(ckie)
	}
	return nil
}

func (t *CheckoutTask) TwVisitProductIndex(page int) (error) {
  url_, err := url.Parse(fmt.Sprintf("https://www.totalwine.com/wine/c/c0020?viewall=true&page=%d&pageSize=200", page))
  if err != nil {
    return err
  }
  headerOrder := []string {
    "upgrade-insecure-requests",
    "user-agent",
    "accept",
    "sec-fetch-site",
    "sec-fetch-mode",
    "sec-fetch-user",
    "sec-fetch-dest",
    "accept-encoding",
    "accept-language",
    "cookie",
  }
  headers := [][2]string {
    {"upgrade-insecure-requests", "1"},
    {"accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"},
    {"sec-fetch-site", "none"},
    {"sec-fetch-mode", "navigate"},
    {"sec-fetch-user", "?1"},
    {"sec-fetch-dest", "document"},
    {"accept-encoding", "gzip, deflate, br"},
    {"accept-language", "en-US,en;q=0.9"},
  }
  resp, err := t.doReq(t.client, t.makeReq("GET", url_, &headers, &headerOrder, nil))
  DiscardResp(resp)
  return err
}



func (t *CheckoutTask) TwStockCheck(state string, storeId string, page int) (*TwProductApiResp, error) {
  url_, err := url.Parse(
  	fmt.Sprintf("https://www.totalwine.com/search/api/product/categories/v2/categories/c0020/products?page=%d&pageSize=200&state=US-%s&shoppingMethod=INSTORE_PICKUP&userShoppingMethod=INSTORE_PICKUP&allStoresCount=true&storeId=%s&ts=%d",
  	page,
  	state,
  	storeId,
  	timeMillis(),
  ))
  if err != nil {
    return nil, err
  }
  headerOrder := []string {
    "accept",
    "user-agent",
    "sec-fetch-site",
    "sec-fetch-mode",
    "sec-fetch-dest",
    "referer",
    "accept-encoding",
    "accept-language",
    "cookie",
  }
  headers := [][2]string {
    {"accept", "application/json, text/plain, */*"},
    {"sec-fetch-site", "same-origin"},
    {"sec-fetch-mode", "cors"},
    {"sec-fetch-dest", "empty"},
    {"referer", fmt.Sprintf("https://www.totalwine.com/wine/c/c0020?viewall=true&page=%d&pageSize=200", page)},
    {"accept-encoding", "gzip, deflate, br"},
    {"accept-language", "en-US,en;q=0.9"},
  }
  resp, err := t.doReq(t.client, t.makeReq("GET", url_, &headers, &headerOrder, nil))
  if err != nil {
  	return nil, err
  }

  var presp TwProductApiResp
  err = readRespJsonDst(resp, &presp)
  return &presp, err
}

func (t *CheckoutTask) TotalWineScrape() error {
	t.DefaultReqClose = true
	t.UserAgent = DD_UAS[rand.Intn(len(DD_UAS))]

	// t.TwGenPxCookie()


	t.FastlyJig()


	// b, _ := ioutil.ReadAll(req.Request.Body)
	// t.LogDebug("%s", string(b))
	states := []string{
		"AL",
		"AK",
		"AZ",
		"AR",
		"CA",
		"CO",
		"CT",
		"DE",
		"FL",
		"GA",
		"HI",
		"ID",
		"IL",
		"IN",
		"IA",
		"KS",
		"KY",
		"LA",
		"ME",
		"MD",
		"MA",
		"MI",
		"MN",
		"MS",
		"MO",
		"MT",
		"NE",
		"NV",
		"NH",
		"NJ",
		"NM",
		"NY",
		"NC",
		"ND",
		"OH",
		"OK",
		"OR",
		"PA",
		"RI",
		"SC",
		"SD",
		"TN",
		"TX",
		"UT",
		"VT",
		"VA",
		"WA",
		"WV",
		"WI",
		"WY",
	}
	storeIds := []string{"1101"}
	stateByStoreId := map[string]string{
		"1101": "America",
	}
	for i := 0; i < len(states); i++ {
		fmt.Println(states[i])
	}
	// for _, state := range states {
	// 	log.Println(state)
	// 	req, err := t.MakeChlsRequest("", nil)
	// 	t.LogDebug("%+v %+v", req, err)
	// 	req.Request.URL.Path = strings.Replace(req.Request.URL.Path, "CA", state, -1)
	// 	req.Request.Close = true
	// 	resp, err := t.doReq(t.client, req.Request)
	// 	if err != nil {
	// 		return err
	// 	}
	// 	var store TwStore
	// 	if err := readRespJsonDst(resp, &store); err == nil {
	// 		for _, s := range store.Stores {
	// 			log.Println(s.StoreNumber)
	// 			storeIds = append(storeIds, s.StoreNumber)
	// 			stateByStoreId[s.StoreNumber] = state
	// 		}
	// 	}
	// }
	log.Println()
	log.Printf("%v", storeIds)
	for i := 0; i < len(storeIds); i++ {
		state := stateByStoreId[storeIds[i]]
		var page int = 1
		var maxPage int = 100
		log.Printf("storeId %s", storeIds[i])
		twProducts := []TwProduct{}
		for page < maxPage {
			log.Printf("page %d", page)
			// t.TwVisitProductIndex(page)
			// TODO only gen every so often
			if (page - 1) % 4 == 0 && !t.UseIpv6 {
				t.TwGenPxCookie()
			}
			stock, err := t.TwStockCheck(state, storeIds[i], page)
			if stock != nil {
				if stock.Pagination.TotalPages > 0 {
					maxPage = stock.Pagination.TotalPages
				}
				twProducts = append(twProducts, stock.Products...)
				log.Printf("npage=%d n=%+v %+v", stock.Pagination.TotalPages,  len(stock.Products), err)
				page += 1
			} else {
				t.FastlyJig()
			}
			// time.Sleep(100*time.Milli)
		}
		twpb, _ := json.Marshal(twProducts)
		fn := fmt.Sprintf("tw-%s-%d.json", storeIds[i], timeMillis())
		log.Printf("wrote %s", fn)
		ioutil.WriteFile(fn, twpb, 0644)
	}
	// log.Printf("%s", string(twpb))

	return nil
}
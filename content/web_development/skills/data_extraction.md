+++
title = "Data Extraction"
+++

{{%bubble %}}

## Data Extraction

**Points:** 2 

**Description:** You can identify the challanges that need to be tackled and demonstrate the experience in area of data extraction

**Person who successfully completed requirement for given block can:** 

- Has a reasonably complete knowledge of anti-data-extraction strategies and ways of countering them (ie. proxies, rate limiting, CAPTCHA etc.)
- Can manifest solid and practical skills in using CSS and XPATH selectors
- Has a strong, working knowledge of regular expressions
- Has a good, working knowledge of at least one tool dedicated for data extraction
- Can compare and contrast a range of tools for data extraction
- Has fundamental knowledge around legal aspects of data extraction

{{% /bubble%}}

## **📦  Ethical Scraping**

### **🎓 Learn**

- 📗 [Legality of web scraping](https://www.notion.so/Data-extraction-429ef8d37b424ff487bd85c82f2aaa26#00a5c9eee95d4f5085b9c9ea82361c44)
- 📗 [robots.txt](https://yoast.com/ultimate-guide-robots-txt/)
- 📗 [Scraper vs Crawler](https://www.notion.so/Data-extraction-ae90cdccff9a43faa4fbf70c76a60e43#3cbc243de69b47af823141cf97bf7937)

### **🎤 Interview**

- When you are allowed to scrape website?
- What is going to stop you from scraping a page?
- What is `robots.txt` and how you can use it?
- What are legal requirements connected with scraping?

## **📦  General**

### **🎤 Interview**

- What is your typical workflow when you write a scrapper?
- What use cases for scraper do you see?
- Tell me more about scrapers or crawlers that you work on in the past.
- Which part of the scraper was the most challenging for you and how did you overcome that?
- What is a difference between scraper and a crawler?

### **📝 Katas**

- Return all meals with prices for given restaurant from [pyszne.pl](http://pyszne.pl) for eg. "Zielona Krowa"

## **📦 Scraping**

**🎓 Learn**

- 📗 [How to avoid getting blocked](https://www.scrapingbee.com/blog/web-scraping-without-getting-blocked/)
- 📗 [CSP & CORS](http://peterforgacs.github.io/2019/02/06/CSP-and-CORS/)

### **🎤 Interview**

- Which session mechanisms do you know and how would you deal with them?
- What is the difference between request based and headless scraping?
- Which tools would you use for raw request based scraping?
- Which tools would you use for headless scraping?
- What is the difference between CSP and CORS?
- How to bypass CORS during a scraping?

### **📝 Katas**

- Create a tool that would use raw requests to scrape website and would read data from HTML.
- Create a scrapper that would use headless browser.

## **📦  Web Scraping**

### **🎓 Learn**

- 📗 [Selectors-api](https://www.w3.org/TR/selectors-api2/)
- 📗 [Selectors-api2](https://www.w3.org/TR/selectors-api2/)
- 📗 [Selectors](https://drafts.csswg.org/selectors-4/#complex)
- 📗 [XPath](https://www.scrapingbee.com/blog/practical-xpath-for-web-scraping/)
- 📗 [rpc](https://www.smashingmagazine.com/2016/09/understanding-rest-and-rpc-for-http-apis/)

### **🎤  Interview**

- What would you use for parsing DOM?
- How would you ensure that your scrapper is getting the right data?
- When would you use CSS selectors for selecting the elements?
- When would you use XPath for selecting the elements?
- How would you approach rpc based API?
- What is the difference between HTTP1 and HTTP2 and how you can use that for scraping?
- Explain what are and how to use websockets.

### **📝  Katas**

- Get all elements which have attributes with pattern `data-test-xxx` and get values from them.

example DOM: 

```html
<div class="miko">
  <a data-test-first-link="I am the first link" />
  <a data-miko-second-link="I am not the link" />
  <a data-test-second-link="I am the second link" />
  <a data-miko-first-link="I am not the link" />
</div>
```

### **📦 Robot anonymization**

**🎓 Learn**
- 📗  [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

### **🎤  Interview**

- How would you hide that yours scraper is a robot?
- How would you implement the worker pool to scrape the website with a lot of resources?
- How you can use headers in your advantage?
- What is user-agent and how we can use it?
- What are the strategies for rate limiting and when to use them?
- What tools can be used for web scraping? Which ones are your preference and why?

### **📝 Katas**

- Scrape all participants from a google meet call (you can assume that you are the host of the conversation or somebody gives you an access).
- Reverse engineering and scraping approach for one of the websites

## **📦  Dealing with obstacles**

### **🎤  Interview**

- How would you deal with all kind of captchas?
- How would you approach problem with 2 factor authentication mechanism as a robot?
- What are the challenges and how to deal with scraping a data from JS application?
- How to prevent your scraper for dying when an error occurs?

### **📦 Scraping outside of web**

### **🎤 Interview**

- What would you use to scrape data from PDF?
- What would you use to scrape data from Word document?
- What would you use to scrape data from Excel document?

### **📝 Katas**

- Write scarper for PDF file.

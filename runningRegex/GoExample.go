package main

import(
	"bytes"
	"fmt"
	"regexp"
)

func main() {
	text := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(text))
	fmt.Println(regex9.FindString(text))
	fmt.Println(regex9.FindStringIndex(text))

	regexLetters, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetters.FindAllString(text,20))
	fmt.Println(regexLetters.ReplaceAllString(text, "I Found"))

	result := regexLetters.ReplaceAllFunc([]byte(text),bytes.ToUpper)
	fmt.Print(string(result))
}
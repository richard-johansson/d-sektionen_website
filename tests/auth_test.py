from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

driver = webdriver.Firefox()

def writeToFile(assertion, output, testName):
    file = open('testOutput.txt', 'a')
    file.write("Test: " + testName + "\n")
    file.write("Expected output: " + assertion + "\n")
    file.write("Actual output: " + output + "\n")

    try:
        assert(output == assertion)
        file.write(testName + " passed!!!\n\n")

    except Exception as e:
        file.write(testName + " FAILED!\n")
        file.write(str(e) + "\n")
    
    file.close()
    return


def logout_test():
    logout_css_selector = "#root > div > div:nth-child(1) > nav > div.navbar-collapse.collapse.w-100.order-3.dual-collapse2 > ul > div > div:nth-child(2) > button"

    driver.find_element(by=By.CSS_SELECTOR, value=logout_css_selector).click()

    output = driver.find_element(by=By.CSS_SELECTOR, value="#root > div > div:nth-child(1) > nav > div.navbar-collapse.collapse.w-100.order-3.dual-collapse2 > ul > div > div:nth-child(2) > button").text
    assertion = "Logga in"

    writeToFile(assertion, output, "logOutTest")
    return


if __name__ == "__main__":
    driver.get("http://localhost:3000")

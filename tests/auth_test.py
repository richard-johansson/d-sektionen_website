from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select

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
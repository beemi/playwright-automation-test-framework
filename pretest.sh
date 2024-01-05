#! /bin/bash

if [[ -d allure-report ]]
then
rm -r allure-report
fi

if [[ -d allure-results ]]
then
rm -r allure-results
fi

if [[ -d test-results ]]
then
rm -r test-results
fi

if [[ -d temp ]]
then
rm -r temp
fi
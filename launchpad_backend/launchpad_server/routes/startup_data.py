from datetime import datetime

application = {
    "tableName": "application",
    "index": "indexId", # Similar to primary key
    "records": [{
        "applicationId": 1, 
        "resume": "figure out how to store pdf lol", 
        "coverLetter": "pdf again",
        "Status": "Reviewed or Applied or Interview Requested",
        "logo": "img url",
        "postingId": 1,
        "userId": 1
    }]
}

user = {
    "tableName": "user",
    "index": "userId", 
    "records": [{
        "userId": 1,
        "email": "michael.cera@yahoo.com", 
        "password": "superbad", 
        "firstName": "Mikey", 
        "lastName": "C", 
        "year": "1st/2nd/3rd or Graduated", 
        "program": "Computer Science",
        "address": {        # If address is not specified for a record, do not include this key-value pair in the dictionary
            "streetAddress": "123 example st",
            "postalCode": "000 000",
            "province": "ON"
        },
        "phoneNumber": "number",  # If number is not specified for a record, do not include this key-value pair in the dictionary
        "twoFactor": False,
        "dataCollection": True,
        "savedPostings": [{
            "dateTime": datetime(2020, 5, 17, 7, 30, 54), "postingId": 1
        }],
        "notifications": [1]  # Ids of all their notifications
    }]
}

posting = {
    "tableName": "posting",
    "index": "postingId",
    "records": [{
        "postingId": 1, 
        "logo": "img url",
        "postingTitle": "title", 
        "postingDescription": "description",
        "deadline": datetime(2020, 5, 17, 7, 30, 54),
        "workModel": "Remote/Online/In-Person",
        "companyId": 1,
        "type": "Internship/New Grad",
        "workterm": "Summer/Winter/Fall",  # Key-value pair only included in dictionary if type = Internship
        "duration": "4 months/8 months, etc."  # Key-value pair only included in dictionary if type = Internship
    }]
}

notification = {
    "tableName": "notification",
    "index": "notificationId",
    "records": [{
        "notificationId": 1,
        "subject": "you got hired", 
        "body": "im lying", 
        "dateTime": datetime(2020, 5, 17, 7, 30, 54), 
        "read": True, 
        "saved": False, 
        "applicationId": 1
    }]
}

company = {
    "tableName": "company",
    "index": "companyId",
    "records": [{
        "companyId": 1, 
        "companyName": "Apple",
        "logo": "img url"
    }]
}

startup_data = [application, user, posting, notification, company]

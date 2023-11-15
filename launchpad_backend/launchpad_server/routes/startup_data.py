from datetime import datetime

application = {
    "tableName": "application",
    "index": "applicationId", # Similar to primary key
    "records": [{
        "applicationId": 1, 
        "resume": "figure out how to store pdf lol", 
        "coverLetter": "pdf again",
        "Status": "Reviewed",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        "postingId": 1,
        "userId": 1
    },
    {
        "applicationId": 2, 
        "resume": "figure out how to store pdf lol", 
        "coverLetter": "pdf again",
        "Status": "Interview Requested",
        "logo": "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
        "postingId": 9,
        "userId": 1
    },
    {
        "applicationId": 3, 
        "resume": "figure out how to store pdf lol", 
        "coverLetter": "pdf again",
        "Status": "Applied",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        "postingId": 2,
        "userId": 2
    }]
}

user = {
    "tableName": "user",
    "index": "userId", 
    "records": [{
        "userId": 1,
        "email": "ash.ketchum@gmail.com", 
        "password": "Pikachu@123", 
        "firstName": "Ash", 
        "lastName": "Ketchum", 
        "year": "4th", 
        "program": "Computer Science",
        "address": {        # If address is not specified for a record, do not include this key-value pair in the dictionary
            "streetAddress": "",
            "postalCode": "",
            "province": ""
        },
        "phoneNumber": "",  # If number is not specified for a record, do not include this key-value pair in the dictionary
        "twoFactor": False,
        "dataCollection": True,
        "savedPostings": [{
            "dateTime": datetime(2023, 10, 10, 7, 30, 54), "postingId": 1
        },
        {
            "dateTime": datetime(2023, 10, 12, 7, 30, 54), "postingId": 9
        }],
        "notifications": [1,2]  # Ids of all their notifications
    },
    {
        "userId": 2,
        "email": "naruto.uzumaki@gmail.com", 
        "password": "BelieveIt@123", 
        "firstName": "Naruto", 
        "lastName": "Uzumaki", 
        "year": "1st", 
        "program": "Computer Science", 
        "address": {        # If address is not specified for a record, do not include this key-value pair in the dictionary
            "streetAddress": "",
            "postalCode": "",
            "province": ""
        },
        "phoneNumber": "",  # If number is not specified for a record, do not include this key-value pair in the dictionary
        "twoFactor": False,
        "dataCollection": True,
        "savedPostings": [{
            "dateTime": datetime(2023, 11, 2, 7, 30, 54), "postingId": 2
        }],
        "notifications": [3]  # Ids of all their notifications
    }]
}

# add location column 
posting = {
    "tableName": "posting",
    "index": "postingId",
    "records": [{
        "postingId": 1, 
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
        "postingTitle": "Software Engineering - Fulltime Opportunities for University Graduates", 
        "postingDescription": """Every year, we welcome thousands of university students from every corner of the world to join Microsoft. You bring your aspirations, talent, potential—and excitement for the journey ahead. We’re a company of learn-it-all’s rather than know-it-alls and our culture is centered around embracing a growth mindset, a theme of inspiring excellence, and encouraging teams and leaders to bring their best each day. Does this sound like you? Learn more about our cultural attributes.
Microsoft's mission is to empower every person and every organization on the planet to achieve more. As employees we come together with a growth mindset, innovate to empower others, and collaborate to realize our shared goals. Each day we build on our values of respect, integrity, and accountability to create a culture of inclusion where everyone can thrive at work and beyond.
Those hired into this role are invited to participate in Microsoft Aspire Experience, a learning and development experience where you will build your network, cultivate intentional capabilities, and gain perspective into the career opportunities across Microsoft’s many exciting businesses.
Come build community, explore your passions, and do your best work at Microsoft with thousands of university graduates from every corner of the world.

Responsibilities

Understand Requirements - Contributes in partnership with stakeholders (e.g., project manager, technical lead) to determine user requirements for a feature. Begins to incorporate appropriate continuous feedback loops measuring customer value.
Design - Learns and contributes to processes for the architecture of a product/solution feature and learns to create proposals by testing design hypotheses and helping to refine code plans under the technical leadership of others. Produces code to test hypotheses for technical solutions and assists with technical validation efforts. Helps with and participates in the development of design documents for simple designs or user stories with oversight, helps to determine the technology that will be leveraged, and how they will interact.
Coding - With guidance, learns to create and implement code for a product, service, or feature reusing code as applicable. Writes and learns to create code that is extensible and maintainable. Learns about and applies diagnosability, reliability, and maintainability, and understands when the code is ready to be shared and delivered. Apply coding patterns and best practices to write code.
Implement - Learns to review work items to gain knowledge of product features in partnership with appropriate stakeholders (e.g., project managers). Assists and learns about breaking down work items into tasks and provides estimation.
Reliability and Supportability - Learns about and contributes to operations of live service as issues arise on a rotational, on-call basis. Identifies solutions and mitigations to simple issues impacting performance or functionality of Live Site services.
Engineering Excellence - Reviews current developments and proactively seeks new knowledge that will improve the availability, reliability, efficiency, observability, and performance of products while also driving consistency in monitoring and operations at scale.
Embody our culture and values.

Qualifications

Bachelor's Degree in Computer Science, or related technical discipline with proven experience coding in languages including, but not limited to, C, C++, C#, Java, JavaScript, or Python

Understanding of Computer Science fundamentals, data structures, algorithms, operating systems, design patterns and related topics

Microsoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.""",
        "deadline": datetime(2024, 1, 8, 23, 59, 59),
        "workModel": "Hybrid",
        "companyId": 1,
        "type": "New Grad",
        "location": "Kolkata, India", # Leave key pair value blank if location not specify
        "workterm": "",  # Key-value pair only included in dictionary if type = Internship
        "duration": ""  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 2, 
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    "postingTitle": "Software Engineering: Intern Opportunities for University Students, Bay Area", 
        "postingDescription": """Come build community, explore your passions and do your best work at Microsoft with thousands of students from every corner of the world. This opportunity will allow you to bring your aspirations, talent, potential—and excitement for the journey ahead. 

Software engineers (SWEs) work with teammates to solve problems and build innovative software solutions. You are passionate about customers and product quality, and you provide technical guidance to Technical Program Managers and Product Managers they consider user needs and product requirements. You will also be expected to demonstrate an ability to learn and adopt relevant new technologies, tools, methods and processes to leverage in your solutions.  As a SWE, you are dedicated to design, development and testing of next-generation software which will empower every person and organization on the planet to achieve more. 

At Microsoft, Interns work on real-world projects in collaboration with teams across the world, while having fun along the way. You'll be empowered to build community, explore your passions and achieve your goals. This is your chance to bring your solutions and ideas to life while working on cutting-edge technology.

Microsoft’s mission is to empower every person and every organization on the planet to achieve more. As employees we come together with a growth mindset, innovate to empower others, and collaborate to realize our shared goals. Each day we build on our values of respect, integrity, and accountability to create a culture of inclusion where everyone can thrive at work and beyond.

Please note this application is only for internships based in our Mountain View, California office. For internships in other offices in the United States, please see our Careers site. 

Responsibilities

Applies engineering principles to solve complex problems through sound and creative engineering. 
Quickly learns new engineering methods and incorporates them into work processes. 
Seeks feedback and applies internal or industry best practices to improve technical solutions. 
Demonstrates skill in time management and completing software projects in a cooperative team environment. 

Qualifications

Required Qualifications

Pursuing a bachelor's or master's degree in engineering, computer science or related field. 
Must have at least one additional quarter/semester of school remaining following the completion of the internship. 
One year of programming experience in an object-oriented language. 

Preferred Qualifications

Ability to demonstrate an understanding of computer science fundamentals, including data structures and algorithms. 

The base pay range for this internship is USD $5,090 - $10,120 per month. There is a different range applicable to specific work locations, within the San Francisco Bay area and New York City metropolitan area, and the base pay range for this role in those locations is USD $6,690 - $11,030 per month.

Certain roles may be eligible for benefits and other compensation. Find additional benefits and pay information here: https://careers.microsoft.com/us/en/us-intern-pay

Microsoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.""",
    "deadline": datetime(2024, 1, 8, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 1,
    "type": "Internship",
    "location": "Mountain View, US", # Leave key pair value blank if location not specify
    "workterm": "Summer",  # Key-value pair only included in dictionary if type = Internship
    "duration": "4-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 3, 
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    "postingTitle": "Software Engineering: Intern Opportunities for University Students, Redmond", 
        "postingDescription": """Come build community, explore your passions and do your best work at Microsoft with thousands of students from every corner of the world. This opportunity will allow you to bring your aspirations, talent, potential—and excitement for the journey ahead. 

Software engineers (SWEs) work with teammates to solve problems and build innovative software solutions. You are passionate about customers and product quality, and you provide technical guidance to Technical Program Managers and Product Managers they consider user needs and product requirements. You will also be expected to demonstrate an ability to learn and adopt relevant new technologies, tools, methods and processes to leverage in your solutions.  As a SWE, you are dedicated to design, development and testing of next-generation software which will empower every person and organization on the planet to achieve more. 

At Microsoft, Interns work on real-world projects in collaboration with teams across the world, while having fun along the way. You'll be empowered to build community, explore your passions and achieve your goals. This is your chance to bring your solutions and ideas to life while working on cutting-edge technology.

Microsoft's mission is to empower every person and every organization on the planet to achieve more. As employees we come together with a growth mindset, innovate to empower others, and collaborate to realize our shared goals. Each day we build on our values of respect, integrity, and accountability to create a culture of inclusion where everyone can thrive at work and beyond.

Please note this application is only for internships based in our Redmond, Washington office. For internships in other offices in the United States, please see our Careers site. 

Responsibilities

Applies engineering principles to solve complex problems through sound and creative engineering. 
Quickly learns new engineering methods and incorporates them into work processes. 
Seeks feedback and applies internal or industry best practices to improve technical solutions. 
Demonstrates skill in time management and completing software projects in a cooperative team environment. 

Qualifications

Required Qualifications

Pursuing a bachelor's or master's degree in engineering, computer science or related field. 
Must have at least one additional quarter/semester of school remaining following the completion of the internship. 
One year of programming experience in an object-oriented language. 

Preferred Qualifications

Ability to demonstrate an understanding of computer science fundamentals, including data structures and algorithms. 

The base pay range for this internship is USD $5,090 - $10,120 per month. There is a different range applicable to specific work locations, within the San Francisco Bay area and New York City metropolitan area, and the base pay range for this role in those locations is USD $6,690 - $11,030 per month.

Certain roles may be eligible for benefits and other compensation. Find additional benefits and pay information here: https://careers.microsoft.com/us/en/us-intern-pay

#AISES

#AT

#GHC

#NSBE

#SHPE

#SWE

Microsoft is an equal opportunity employer. Consistent with applicable law, all qualified applicants will receive consideration for employment without regard to age, ancestry, citizenship, color, family or medical care leave, gender identity or expression, genetic information, immigration status, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran or military status, race, ethnicity, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable local laws, regulations and ordinances. If you need assistance and/or a reasonable accommodation due to a disability during the application process, read more about requesting accommodations.""",
    "deadline": datetime(2024, 1, 8, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 1,
    "type": "Internship",
    "location": "Vancouver, Canada", # Leave key pair value blank if location not specify
    "workterm": "Fall",  # Key-value pair only included in dictionary if type = Internship
    "duration": "4-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 4, 
    "logo": "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png",
    "postingTitle": "Software Development Engineer Intern - 2024 (Canada)", 
        "postingDescription": """Amazon internships are full-time positions, and interns should expect to work Monday-Friday, up to 40 hours per week typically between 8am-5pm. Specific team norms around working hours will be communicated by your manager. Interns should not have conflicts such as class or other employment during the Amazon work-day.

Applicants should have a minimum of one school term remaining in their studies after the internship concludes. We will take your internship season and location preferences into consideration. Preferences are based on business availability and are not guaranteed. Please note that a majority of our internships take place in the summer.

Start Dates For Our Internships Include The Following Periods

Winter (Starts January/February)
Summer (Starts May/June)
Fall (Starts August/September)

Software Development Engineer (SDE) Internships

At Amazon, we hire the best minds in technology to innovate and build on behalf of our customers. The intense focus we have on our customers is why we are one of the world's most beloved brands - customer obsession is part of our company DNA. Our interns write software and collaborate with experienced software development engineers (SDEs) who guide interns on projects that matter to our customers.

As an intern, you will be matched to a manager and a mentor. You will have the opportunity to influence the evolution of Amazon technology and lead critical projects early in your career. Your design and code will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, automation, optimization, scalability, and security – just to name a few.

In addition to working on an impactful project, you will have the opportunity to engage with Amazonians for both personal and professional development, expand your network, and participate in activities with other interns throughout your internship. No matter the location of your internship, we give you the tools to own your project and learn in a real-world setting. Many of our technologies overlap, and you would be hard pressed to find a team that is not using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for customers. We make the impossible, possible.

Key Job Responsibilities

Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.
Design and build innovative technologies in a large distributed computing environment, and help lead fundamental changes in the industry.
Create solutions to run predictions on distributed systems with exposure to innovative technologies at incredible scale and speed.
Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use.
Ability to design and code the right solutions starting with broadly defined problems.
Work in an agile environment to deliver high-quality software.

Locations:

Note: By applying to this position, your application will be considered for all locations we hire for in Canada including, but not limited to: Vancouver, BC; Toronto, ON, Winnipeg, MN, Victoria, BC, Ottawa, ON, Calgary, AB. Locations are subject to change.

We're on the lookout for the curious, those who think big and want to define the world of tomorrow. At Amazon, you will grow into the high impact, visionary person you know you're ready to be. Every day will be filled with exciting new challenges, developing new skills, and achieving personal growth.

How often can you say that your work changes the world? At Amazon, you'll say it often. Join us and define tomorrow.

We are open to hiring candidates to work out of one of the following locations:

Vancouver, BC, CAN

Basic Qualifications

Currently enrolled in a Diploma, Bachelors, Masters, or PhD in Computer Science, Computer Engineering, Data Science, Electrical Engineering, or majors relating to these fields.
Expected graduation date between 10/2024 - 9/2027.
Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design.

Preferred Qualifications

Previous technical internship(s), if applicable.
Experience with distributed, multi-tiered systems, algorithms, and relational databases.
Experience in optimization mathematics such as linear programming and nonlinear optimization.
Ability to effectively articulate technical challenges and solutions.
Adept at handling ambiguous or undefined problems as well as ability to think abstractly.

Applications are reviewed on a rolling basis. For an update on your status or to confirm your application was submitted successfully, please login to your candidate portal at amazonuniversity.jobs. Amazon works with a high volume of applicants so we appreciate your patience as we review applications.

Our inclusive culture empowers Amazonians to deliver the best results for our customers. We not only celebrate the diversity of our workforce, we celebrate the diverse ways we work. If you have a disability and need an accommodation, such as sign languages interpretation or a different interview format, let us know. Contact us at 1-888-470-1688, Monday through Friday from 6 a.m. to 7 p.m. PT. Amazon is committed to providing employment accommodation in accordance with the Canada Human Rights Code and the Accessibility for Canadians with Disabilities Act. If you require accommodations, please notify us when/if you are selected for an interview.

Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, disability, age, or other legally protected status. If you would like to request an accommodation, please notify your Recruiter.""",
    "deadline": datetime(2024, 1, 10, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 2,
    "type": "Internship",
    "location": "Mountain View, US", # Leave key pair value blank if location not specify
    "workterm": "Summer",  # Key-value pair only included in dictionary if type = Internship
    "duration": "4-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 5, 
    "logo": "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png",
    "postingTitle": "Amazon Robotics - Software Development Engineer Co-Op - Spring 2024 - Toronto", 
        "postingDescription": """Are you inspired by invention? Is problem solving through teamwork in your DNA? Do you like the idea of seeing how your work impacts the bigger picture? Answer yes to any of these and you’ll fit right in here at Amazon Robotics. We are a smart team of doers who work passionately to apply cutting edge advances in robotics and software to solve real-world challenges that will transform our customers’ experiences. We invent new improvements every day. We are Amazon Robotics and we will give you the tools and support you need to invent with us in ways that are rewarding, fulfilling, and fun.

Amazon Robotics, a wholly owned subsidiary of Amazon.com, empowers a smarter, faster, more consistent customer experience through automation. Amazon Robotics automates fulfillment center operations using various methods of robotic technology including autonomous mobile robots, sophisticated control software, language perception, power management, computer vision, depth sensing, machine learning, object recognition, and semantic understanding of commands. Amazon Robotics has a dedicated focus on research and development to continuously explore new opportunities to extend its product lines into new areas.

Amazon Robotics internship/co-op/full-time opportunities will be based out of the Greater Boston Area in our two state-of-the-art facilities in Westborough, MA and North Reading, MA. Both campuses provide a unique opportunity to have direct access to robotics testing labs and manufacturing facilities.

We are open to hiring candidates to work out of one of the following locations:

Toronto, ON, CAN

Basic Qualifications

Currently enrolled in college/university and must have at least one semester/term/quarter of school left to complete after the end of the co-op
Must be eligible and available for a full-time (40h / week) 6-month co-op between January to June 2024

Preferred Qualifications

Experience with creative problem solving and articulating technical challenges and solutions
Exposure to any of the following concepts: AWS and other Web Technologies, schedulers, workflows, state machines, multi-threading, and networking protocols
Interest in Robotics, including coursework or clubs

Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, disability, age, or other legally protected status. If you would like to request an accommodation, please notify your Recruiter.""",
    "deadline": datetime(2024, 1, 23, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 2,
    "type": "Internship",
    "location": "Toronto, Canada", # Leave key pair value blank if location not specify
    "workterm": "Summer",  # Key-value pair only included in dictionary if type = Internship
    "duration": "4-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 6, 
    "logo": "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png",
    "postingTitle": "Jr. Software Development Engineer", 
        "postingDescription": """Amazon is looking for a highly-motivated Jr. Software Development Engineer (SDE)! Jr. SDEs write real software and collaborate with experienced software engineers who provide guidance and opportunities for ownership on projects that matter to our customers. As a year-round intern, Jr. SDEs become fully integrated into their teams and regularly contribute to impactful deliverables. Your design and code will contribute to solving some of Amazon's most complex technical challenges.

The Jr. SDE role is part of Amazon's Jr Developer Program - a year-round internship opportunity that offers a symbiotic relationship between work and school. Jrs. receive 1:1 mentoring throughout their time in the program, receiving guidance and insight from a full-time Amazonian on their team. Because of the internship's extended tenure, our Jrs. become immersed in an Amazon team and gain real-life technical experience. Flexible part-time schedules during the school year and full-time employment over the summer creates an environment where students can succeed in both their work and their education. Portland has a growing population of Jrs., allowing for deep connections with fellow students engaged in similar roles.

Upon successful completion of the Jr. Developer Program, the opportunity to apply for a full-time employment will be available at an Amazon corporate site.

Role Highlights

Part-time work during the school year (16 hours/week)
Full-time work during the summer (40 hours/week)
1:1 mentoring with an experienced Software Engineer
Effective performance management and integrated opportunities for growth

We are open to hiring candidates to work out of one of the following locations:

Portland, OR, USA

Basic Qualifications

Currently enrolled in an accredited college or university Bachelor's degree program.
Majoring in Computer Science, Software Engineering, or related STEM field.
Graduating Spring 2025 or later.
Ability to work year-round until graduation (part-time during the school year and full-time during the summer).
Living within commutable distance to Portland, OR office and able to work in-person year-round.
Programming experience with at least one modern language such as Java, Python, or C++ including object-oriented design.

Preferred Qualifications

Previous technical internship(s), if applicable.
Ability to effectively articulate technical challenges and solutions.
Adept at handling ambiguous or undefined problems as well as ability to think abstractly.

Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate on the basis of race, national origin, gender, gender identity, sexual orientation, protected veteran status, disability, age, or other legally protected status. For individuals with disabilities who would like to request an accommodation, please visit https://www.amazon.jobs/en/disability/us.""",
    "deadline": datetime(2024, 1, 10, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 2,
    "type": "New Grad",
    "location": "Amazon Portland, US", # Leave key pair value blank if location not specify
    "workterm": "",  # Key-value pair only included in dictionary if type = Internship
    "duration": ""  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 7, 
    "logo": "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png",
    "postingTitle": "Intern, Lifecycle Marketing (Winter 2024)", 
        "postingDescription": """Your career is an investment that grows over time!

Wealthsimple is on a mission to help everyone achieve financial freedom by reimagining what it means to manage your money. Using smart technology, we take financial services that are often confusing, opaque and expensive and make them transparent and low-cost for everyone. We’re the largest fintech company in Canada, with over 3 million users who trust us with more than $20 billion in assets.

Our teams ship often and make an impact with groundbreaking ideas. We're looking for talented people who keep it simple and value collaboration and humility as we continue to create inclusive and high-performing teams where people can be inspired to do their best work.

Internships @ Wealthsimple

At Wealthsimple, we offer 4 to 8-month internships that are open to co-op and non-co-op students, recent grads, and career changers. During your remote-first internship, you will be able to contribute to projects that are changing the landscape of financial services for Canadians. You will be on a team that supports your growth and provides mentorship while also connecting to the broader Wealthsimple community!

About the role:

We're hiring a Lifecycle Marketing Intern for an eight-month internship to help support Wealthsimple's proactive client communication initiatives. This role is both technical and creative where you'll work on the planning and execution of end-to-end lifecycle marketing campaigns across Wealthsimple’s brand and product ecosystem.

The ideal candidate is one who can think “client first,” who can balance multiple projects simultaneously without sacrificing on quality, and who is eager to learn more about the interconnected technical and creative elements of consumer growth marketing programs. You’ll be joining our multidisciplinary Growth organization where you’ll work with stakeholders from Product, Engineering, Design, Data Science, Communications & Engineering and other Growth and Lifecycle Marketers like yourself.

In this role, you'll have the opportunity to:

Develop, build, and ship various marketing campaigns via lifecycle marketing channels including email, push notifications, in-app launch modals, and in-app marketing cards
Support in automating and operationalizing common emails and communications for teams outside of lifecycle marketing
Work with Lifecycle Marketing Managers and Specialists to design and implement automated, multi-channel programs and experiments across the client lifecycle
Ideate & experiment on lifecycle strategies/tactics to drive activation, retention, engagement and cross-sell of users within Wealthsimple's product ecosystem (eg. promotions, incentives)
Analyze campaign and program performance; proactively report on campaign impact, client behaviours, and experimental results/learnings
Maintain and execute against Wealthsimple's lifecycle marketing promotional campaign calendar
Execute and analyze A/B tests to increase campaign performance and conversion rates


We're looking for someone who has/is:

An eagerness to learn more about lifecycle marketing including email best practices, client journeys and client flow mapping, email service provider (ESP) software including Braze and Taxi, as well as segmentation and audience-building
Proven success in working with cross-functional teams to set and execute against data-informed growth targets/OKRs
Strong writing and communication skills
Naturally collaborative and empathetic — both with colleagues and on behalf of clients
Experience and comfort communicating via Slack with teams across the organization
Demonstrated ability to rapidly adapt to new tools and processes


Note: This is a Winter 2024 Internship role.

Applications are closed on November 8th, 5pm EST.

Why Wealthsimple?

🤑 Competitive Salary with retirement savings matching plan using Wealthsimple Work

🌴 Generous vacation days and unlimited sick and mental health days

🎉 Intern programming including educational workshops, hackathons, and mentorship

🌎A wide variety of peer and company-led employee resource groups (ie. Rainbow, Women of Wealthsimple, Black @ WS) Employee Resource Groups

💖 Company-wide wellness days off scheduled throughout the year

What past interns have said about their experience at Wealthsimple:

"I absolutely loved the term here and had a great chance to learn new things and meet many amazingly talented people! I also really appreciated the mentorship program, having someone who was an alumni from my school+program was a great chance to learn more and help plan my career and academic journey!"

"The other interns were really a highlight as well as all of the things that y'all planned for us. I also would say my own team really made me feel at home and welcomed. I love the codebase and engineering tools a lot and will miss it!"

"Lot of autonomy and trust from teammates; In-person office experience allowed for a lot of deeper friendships; I genuinely like the Wealthsimple product which made it very exciting to work on it"

We're a remote-first team, with over 1000 employees coast to coast in North America. Be a part of our Canadian success story and help shape the financial future of millions — join us!

Read our Culture Manual and learn more about how we work.

DEI Statement

At Wealthsimple, we are building products for a diverse world and we need a diverse team to do that successfully. We strongly encourage applications from everyone regardless of race, religion, colour, national origin, gender, sexual orientation, age, marital status, or disability status.

Accessibility Statement

Wealthsimple provides an accessible candidate experience. If you need any accommodations or adjustments throughout the interview process and beyond, please let us know, and we will work with you to provide the necessary support and make reasonable accommodations to facilitate your participation. We are continuously working to improve our accessibility practices and welcome any feedback or suggestions on how we can better accommodate candidates with accessibility needs.""",
    "deadline": datetime(2024, 1, 12, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 3,
    "type": "Internship",
    "location": "Amazon Portland, US", # Leave key pair value blank if location not specify
    "workterm": "Winter",  # Key-value pair only included in dictionary if type = Internship
    "duration": "4-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 8, 
    "logo": "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
    "postingTitle": "GBM - Trade Floor Technology Consultant (Web Developer) Internship/Co-op May 2024 (16 months)", 
    "postingDescription": """Term: 16 months

Start date: May 2024

Application Deadline: November 6th, 2023

There's no better way to find your dream job than to do a co-op or internship with Scotiabank! During your work term, you'll have the opportunity to be part of a winning team, build your network, and discover what you love – all while getting paid to do it! There’s a place for every type of student at Scotiabank and all that we ask for is that you have passion and strong AOO (Attitude, Ownership and Opportunity).

Who We Are

Global Banking & Markets (GBM) provides a full range of investment banking, credit and risk management products and services relevant to the financing and strategic development needs of our clients. Our products include debt and equity financing, mergers & acquisitions, corporate banking, institutional equity sales, trading and research, fixed income products, derivatives, energy, foreign exchange, and precious & metals. We also cross-sell the full range of wholesale products and services offered by the Scotiabank Group.

Is this role right for you? In this role, you will:

As a Trade Floor Technology Consultant (Web Developer), you will work on Scotiabank's trade floor, providing full stack web development of applications and enhancement of web-based systems. As part of the Global Banking & Markets, Trade Floor Support & Automation team, you will analyze business processes, liaise with various groups within the bank, develop web-based systems, and design user interfaces to meet business needs. You will use state of the art web development technologies, including working with large datasets, bulk editing, advanced reporting, workflow notifications, APIs, web security, and intelligent prediction using analytics/machine learning.

This position offers individuals an excellent opportunity for learning and personal development, especially to those who wish to gain exposure to capital markets and related fields. You will also get exposure to financial products, as well as leading edge trading technologies and applications such as Bloomberg.

What's in it for you?

This position offers individuals an excellent opportunity for learning and personal development, especially to those who wish to gain exposure to capital markets and related fields.

You'll be part of a diverse, collaborative, innovative, and high-performing team.
In-depth training to prepare you for the role, as well as ongoing coaching and feedback to help you succeed!
Exclusive student events such as Scotia Student Day, Lunch & Learns, leadership panels, and much more!
Bank-wide orientation to learn more about Scotiabank and gain exposure to senior leadership across the organization.
Opportunity to get involved in the Scotiabank Co-op Social Committee and help plan events across Toronto.
Work in the heart of the Financial and Entertainment Districts in downtown Toronto.
Trade Floor Tours are available, offering a rare insight into modern financial analysis, trading, and sales.
On-site cafeteria and free refreshments available.

Requirements

Do you have the skills and requirements that will enable you to succeed in this role? - We'd love to work with you if:

You are currently enrolled in post-secondary education.
You love to learn and envision yourself working for an international organization that heavily invests in your future.
You enjoy being involved in extracurricular activities such as conferences, clubs, and competitions/hackathons.
You possess effective programming and analytical skills. Familiarity and experience with full stack web development is preferred including: 
Front-end languages and frameworks (e.g. HTML, CSS, JavaScript, JQuery, Bootstrap, React, Vue.js)
Back-end languages (e.g. C#, ASP, Visual Basic, Python)
SQL and relational databases (e.g. Microsoft SQL Server or Microsoft Access)
You have good interpersonal and communication skills. These are essential, as you will be required to work in a team environment and communicate with various channels. 
You are highly self-motivated, and able to work quickly in a dynamic, challenging, and fast-paced environment. The tools being built are constantly evolving and changing according to business needs and technological opportunities, and you will be encouraged to contribute ideas to the design and implementation of such tools as part of a collaborative process.

How do I apply?

Please Complete All Four Steps Below

Complete your PLUM Profile here and save as a screenshot. 
Complete a short one-way video interview here. 
Complete a Codility Assessment here. There are 2 questions on the Codility test: one arithmetic problem (using any of C, C++, C#, Java, Javascript, Python) and one SQL. Time limit to complete the assessment is 1 hour.
Apply to the role and when the application asks for your resume, instead upload the screenshot of your PLUM Profile and the most recent version of your transcript. 
Applications are reviewed on a rolling basis. It is recommended that you apply at your earliest convenience.
To be considered for student opportunities at Scotiabank, Tangerine, and MD Financial you must complete all steps above.

Location(s): Canada : Ontario : Toronto

Scotiabank is a leading bank in the Americas. Guided by our purpose: "for every future", we help our customers, their families and their communities achieve success through a broad range of advice, products and services, including personal and commercial banking, wealth management and private banking, corporate and investment banking, and capital markets.

At Scotiabank, we value the unique skills and experiences each individual brings to the Bank, and are committed to creating and maintaining an inclusive and accessible environment for everyone. If you require accommodation (including, but not limited to, an accessible interview site, alternate format documents, ASL Interpreter, or Assistive Technology) during the recruitment and selection process, please let our Recruitment team know. If you require technical assistance, please click here. Candidates must apply directly online to be considered for this role. We thank all applicants for their interest in a career at Scotiabank; however, only those candidates who are selected for an interview will be contacted.""",
    "deadline": datetime(2024, 1, 14, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 4,
    "type": "Internship",
    "location": "Toronto, Canada", # Leave key pair value blank if location not specify
    "workterm": "Winter",  # Key-value pair only included in dictionary if type = Internship
    "duration": "16-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 9, 
    "logo": "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
    "postingTitle": "Software Engineer", 
    "postingDescription": """Requisition ID: 187362

Join a purpose driven winning team, committed to results, in an inclusive and high-performing culture.

We are looking for a Software Engineer to work within GBP High Value Payment Technology to develop solutions to support the bank's payment modernization initiative. The incumbent will be responsible for the design, implementation, testing and support of high value payment applications.

What will you do?

Participate in all aspects of a SDLC (Requirements, Analysis, Design, Code, Test, Production deployment and support).
evelop software following sound software engineering principles and lead design sessions and code / design reviews.
Work collectively within a dynamic team to actively participate and contribute to delivery and support of the bank's payment modernization initiative in accordance with designs.
Champions a customer focused culture to deepen client relationships and leverage broader Bank relationships, systems and knowledge.
Ensure a timely delivery of quality products/functions which meet end-user requirements. 
Must be able to work within tight deadlines and schedules which may result in extended working hours during peak time to meet project deliverables 
Support production issues and handle escalations during the day as well as off-hours
Understand how the Bank's risk appetite and risk culture should be considered in day-to-day activities and decisions.
Actively pursues effective and efficient operations of his/her respective areas in accordance with Scotiabank's Values, its Code of Conduct and the Global Sales Principles, while ensuring the adequacy, adherence to and effectiveness of day-to-day business controls to meet obligations with respect to operational, compliance, AML/ATF/sanctions and conduct risk. 
Champions a high performance environment and contributes to an inclusive work environment. 

What do you need to succeed?

University/college degree in Computer Science / Software Engineering or equivalent experience 1+ years of relevant work experience
Java Spring Boot / Java Unit Testing / Design Patterns
RESTful API / JSON
Javascript / React / JSX
HTML / CSS
Git
Oracle / DB2 SQL
Linux / Unix / Shell Programming
SWIFT payment experience is a nice-to-have
Experience in Banking/Financial industry is a nice-to-have

What's in it for you?

We have an inclusive and collaborative working environment that encourages creativity and curiosity and celebrates success
We provide you with the tools and technology needed to create meaningful customer experiences
You'll get to work with and learn from diverse industry leaders, who have hailed from top technology companies around the world
We hire you for your talent — not just a job — so you can grow with us. We'll equip you for success not only in your role, but also in your career as a whole
Dress codes don't apply here: being comfortable does
Our work from home social channel offers weekly virtual yoga, social events, learning opportunities, and contests to share current experiences & promote wellbeing in our new remote environment
Access to thousands of online and in-person courses so you can hone your current skills, or learn new ones
A competitive rewards package that includes a base salary, a performance bonus, company matching programs on pension and profit sharing, paid vacation, personal & sick days, medical, vision, and dental benefits that start from day one and much more

Work conditions: Hybrid

Some of our perks & onsite offerings will be offline as we continue to monitor federal and provincial regulations around COVID-19

Location(s): Canada : Ontario : Toronto

Scotiabank is a leading bank in the Americas. Guided by our purpose: "for every future", we help our customers, their families and their communities achieve success through a broad range of advice, products and services, including personal and commercial banking, wealth management and private banking, corporate and investment banking, and capital markets.

At Scotiabank, we value the unique skills and experiences each individual brings to the Bank, and are committed to creating and maintaining an inclusive and accessible environment for everyone. If you require accommodation (including, but not limited to, an accessible interview site, alternate format documents, ASL Interpreter, or Assistive Technology) during the recruitment and selection process, please let our Recruitment team know. If you require technical assistance, please click here. Candidates must apply directly online to be considered for this role. We thank all applicants for their interest in a career at Scotiabank; however, only those candidates who are selected for an interview will be contacted.""",
    "deadline": datetime(2024, 1, 14, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 4,
    "type": "New Grad",
    "location": "Toronto, Canada", # Leave key pair value blank if location not specify
    "workterm": "",  # Key-value pair only included in dictionary if type = Internship
    "duration": ""  # Key-value pair only included in dictionary if type = Internship
    },
    {
    "postingId": 10, 
    "logo": "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png",
    "postingTitle": "UNLOCK YOUR FUTURE 2024 - Women in Technology Mentorship and Development Program", 
    "postingDescription": """Requisition ID: 188016

Join a purpose driven winning team, committed to results, in an inclusive and high-performing culture.

Scotiabank

UNLOCK YOUR FUTURE 2024 - Women in Technology Mentorship and Development Program 

About This Program

Unlock a future of careers in Technology by exploring and igniting your passion for the world of Tech!

Scotiabank's UNLOCK YOUR FUTURE - Women in Technology Mentorship Program is a selective program designed for female-identifying first and second-year students who have an interest in technology. Our program supports and develops women early in their academic career by providing exposure, insights and opportunities to learn about the technology space from experienced professionals.

About

The development program will run from January 2024 to June 2024. Throughout the program participants will be assigned a mentor, get access to targeted workshops to help prepare candidates, and the opportunity to participate in candid discussions about what it means to be a woman working in technology. Topics may include, but are not limited to:

Introduction to Technology as a career path 
Possible jobs/roles in technology at Scotiabank 
Elevator pitch 
Resume and Interview workshops 
Leadership and empowerment workshops 
Key discussions about qualities that make women successful in Tech 
Speaker Panels 

Participants will also have the opportunity to engage with leaders to discover different career path opportunities as well as having access to recruitment opportunities for co-op roles. 

Program Eligibility

We are seeking highly motivated female-identifying students who are interested in key learning and development opportunities within technology! Top candidates will demonstrate a high level of energy and a keen desire to learn new concepts, with an interest in tech. To apply, you must:

Identify as Female 
Be currently enrolled in an undergraduate STEM (Science, Technology, Engineering or Math) program 
Have entered first or second year of study as of Fall 2023 
Have an interest in learning and pursuing a career in technology 
Have a track record of success in extracurricular achievements 
Be interested and available for meetings and program sessions with assigned mentor(s) 
Please note: past or current Scotiabank interns/co-op students are not eligible for this program**

This program is open to students across Canada. Due to the geographically concentrated nature of the industry, geographic proximity between advisors and participants may not always be feasible.

We are committed to offering you extensive opportunities for development and professional growth. Simply put, your future is our investment!

Application Process

Complete a video interview via this link ( https://ca.rivs.com/54-89-25/ ) 
Click “Apply” Through the link below. We are resumeless! If you are asked for a resume, upload a screenshot of your LinkedIn profile (if you do not have one you may submit your resume however, it will not be reviewed).

You must complete all steps for your application to be considered for program. Only those selected for the program will be contacted.

Applications are due: Friday December 1st 2023 at 11:59pm EST 

Location(s): Canada : Ontario : Toronto

Scotiabank is a leading bank in the Americas. Guided by our purpose: "for every future", we help our customers, their families and their communities achieve success through a broad range of advice, products and services, including personal and commercial banking, wealth management and private banking, corporate and investment banking, and capital markets.

At Scotiabank, we value the unique skills and experiences each individual brings to the Bank, and are committed to creating and maintaining an inclusive and accessible environment for everyone. If you require accommodation (including, but not limited to, an accessible interview site, alternate format documents, ASL Interpreter, or Assistive Technology) during the recruitment and selection process, please let our Recruitment team know. If you require technical assistance, please click here. Candidates must apply directly online to be considered for this role. We thank all applicants for their interest in a career at Scotiabank; however, only those candidates who are selected for an interview will be contacted.""",
    "deadline": datetime(2024, 1, 14, 23, 59, 59),
    "workModel": "Hybrid",
    "companyId": 4,
    "type": "Internship",
    "location": "Toronto, Canada", # Leave key pair value blank if location not specify
    "workterm": "Winter",  # Key-value pair only included in dictionary if type = Internship
    "duration": "6-Months"  # Key-value pair only included in dictionary if type = Internship
    },
    ]
}

notification = {
    "tableName": "notification",
    "index": "notificationId",
    "records": [{
        "notificationId": 1,
        "subject": "Application Received - Microsoft", 
        "body": """Hi Ash,

Thank you for applying to the Software Engineering - Fulltime Opportunities for University Graduates position at Microsoft.

I'd like to inform you that we received your application. Our hiring team is currently reviewing all applications and we are planning to schedule interviews in the next two weeks. If you are among qualified candidates, you will receive [e.g. a call/email] from our one of our recruiters to schedule [e.g. a phone interview.] In any case, we will keep you posted on the status of your application.


Thank you, again, for taking the time to apply to this role at Microsoft

Best regards,

Sasuke Uchiha""", 
        "dateTime": datetime(2023, 11, 14, 7, 30, 54), 
        "read": True, 
        "saved": False, 
        "applicationId": 2
    },
    {
        "notificationId": 2,
        "subject": "Final Interview - ScotiaBank Software Engineer", 
        "body": """Hi Ash,

I'd like to thank you for taking the time to submitting your application for the Software Engineer position. The team really enjoyed learning more about your experience and felt impressed by your qualifications.

We'd like to invite you to complete an interview with Samuel Oak, our software manager. The interview will take approximately one hour and will take place at our downtown location.

Below are some times and dates that work best with Oak's schedule:

Tuesday, 3/2/20 at 1:00 p.m.
Wednesday, 3/3/20 at 3:00 p.m.
Thursday, 3/4/20 at 4:00 p.m.
Please let me know which of these options works best for you and I'll schedule the interview accordingly. If none of these times work, let me know and I'll happily provide alternative options.

Thank you again for your participation.

All the best,

Gary Oak
Recrutier, ScotiaBank
111-111-1111""", 
        "dateTime": datetime(2023,11, 7, 7, 30, 54), 
        "read": True, 
        "saved": False, 
        "applicationId": 1
    },
    {
        "notificationId": 3,
        "subject": "Application Received - Microsoft", 
        "body": """Hi Naruto,

Thank you for applying to the Software Engineering - Fulltime Opportunities for University Graduates position at Microsoft.

I'd like to inform you that we received your application. Our hiring team is currently reviewing all applications and we are planning to schedule interviews in the next two weeks. If you are among qualified candidates, you will receive [e.g. a call/email] from our one of our recruiters to schedule [e.g. a phone interview.] In any case, we will keep you posted on the status of your application.


Thank you, again, for taking the time to apply to this role at Microsoft

Best regards,

Sasuke Uchiha """, 
        "dateTime": datetime(2023, 11, 4, 7, 30, 54), 
        "read": True, 
        "saved": False, 
        "applicationId": 3
    }]
}

company = {
    "tableName": "company",
    "index": "companyId",
    "records": [{
        "companyId": 1, 
        "companyName": "Microsoft",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
    },
    {
        "companyId": 2, 
        "companyName": "Amazon",
        "logo": "https://seeklogo.com/images/A/amazon-icon-logo-8F577E5C31-seeklogo.com.png"
    },
    {
        "companyId": 3, 
        "companyName": "Wealthsimple",
        "logo": "https://images.ctfassets.net/v44fuld738we/3p54yem0uWnzJSPyCLdQgN/10e0569c130b369cf6b33e2f1a88acc7/_2019_Wealthsimple_Favicon_Black.png"
    },
    {
        "companyId": 4, 
        "companyName": "Scotiabank",
        "logo": "https://seeklogo.com/images/S/scotiabank-logo-D2F1AF87B5-seeklogo.com.png"
    }]
}

startup_data = [application, user, posting, notification, company]
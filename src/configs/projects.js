
export const projectFormFields = [
	{
		"name": "name",
		"placeholder": "Project Title...",
		"label": "Title",
		"type": "text"
	},{
		"name": "description",
		"placeholder": "Start typing...",
		"label": "Description",
		"type": "textarea"
	},{
		"name": "members",
		"placeholder": "",
		"label": "Members",
		"type": "select",
		"multiple": true,
		"options": [
			{
				"name":"member1",
				"value": "John Smith"
			},
			{
				"name":"member2",
				"value": "Nishi Jain"
			},
			{
				"name":"member3",
				"value": "Smriti Singh"
			},
			{
				"name":"member4",
				"value": "Neeraj Kaplas"
			},
			{
				"name":"member5",
				"value": "David"
			}
		]
	}
];

export const taskFormFields = [
	{
		"name": "name",
		"placeholder": "Task Title",
		"label": "Title",
		"defaultValue":" ",
		"type": "text"
	},{
		"name": "description",
		"placeholder": "Start typing...",
		"label": "Description",
		"type": "textarea",
		"defaultValue": " "
	},{
		"name": "status",
		"placeholder": "",
		"label": "Status",
		"type": "select",
		"options": [
			{
				"name":"Select",
				"value": "Select"
			},
			{
				"name":"Done",
				"value": "Done"
			},
			{
				"name":"On Hold",
				"value": "On Hold"
			},
			{
				"name":"In Process",
				"value": "In Process"
			},
			{
				"name":"Sent",
				"value": "Sent"
			},
			{
				"name":"Schedule",
				"value": "Schedule"
			}
		]
	}
];
export const persistedState = {
	"projects": [{
	        "id": 1,
	        "name": "Publishing",
	        "description": "This module helps users to post in multiple channel at once.",
	        "members": {
	        	"member_1":{
	        		"name": "Nishi Jain",
	        		"id": 1,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	}
	        		]
	        	},
	        	"member_2":{
	        		"name": "Neeraj Kaplas",
	        		"id": 2,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Schedule"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_3":{
	        		"name": "Anju Malik",
	        		"id": 3,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_4":{
	        		"name": "Bhawna Khanna",
	        		"id": 4,
	        		"tasks": [
	        			{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]	
	        	},
	        	"member_5":{
	        		"name": "Raj Menon",
	        		"id": 5,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	}
	        		]
	        	},
	        	"member_6":{
	        		"name": "Rita Jain",
	        		"id": 6,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_7":{
	        		"name": "Anuj Manna",
	        		"id": 7,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_8":{
	        		"name": "Bhawna Khanna",
	        		"id": 8,
	        		"tasks": [
	        			{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]	
	        	}
	        }
	    },
	    {
	        "id": 2,
	        "name": "Paid",
	        "description": "It is a module which helps use to post in multiple channels at once.",
	        "members": {
	        	"member_1":{
	        		"name": "Nishi Jain",
	        		"id": 1,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Schedule"
			        	}
	        		]
	        	},
	        	"member_2":{
	        		"name": "Neeraj Kaplas",
	        		"id": 2,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Done"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_3":{
	        		"name": "Anju Malik",
	        		"id": 3,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_4":{
	        		"name": "Bhawna Khanna",
	        		"id": 4,
	        		"tasks": [
	        			{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]	
	        	},
	        	"member_5":{
	        		"name": "Raj Menon",
	        		"id": 5,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	}
	        		]
	        	},
	        	"member_6":{
	        		"name": "Rita Jain",
	        		"id": 6,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Schedule"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_7":{
	        		"name": "Anuj Manna",
	        		"id": 7,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_8":{
	        		"name": "Bhawna Khanna",
	        		"id": 8,
	        		"tasks": [
	        			{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]	
	        	}
	        }
	    },
	    {
	        "id": 3,
	        "name": "Core",
	        "description": "It is a module which helps use to post in multiple channels at once.",
	        "members": {
	        	"member_1":{
	        		"name": "Nishi Jain",
	        		"id": 1,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "On Hold"
			        	}
	        		]
	        	},
	        	"member_2":{
	        		"name": "Neeraj Kaplas",
	        		"id": 2,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_3":{
	        		"name": "Anju Malik",
	        		"id": 3,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	},
	        	"member_4":{
	        		"name": "Bhawna Khanna",
	        		"id": 4,
	        		"tasks": [
	        			{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]	
	        	},
	        	"member_5":{
	        		"name": "Raj Menon",
	        		"id": 5,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Schedule"
			        	}
	        		]
	        	},
	        	"member_6":{
	        		"name": "Rita Jain",
	        		"id": 6,
	        		"tasks": [
	        			{
			        		"id":1,
			        		"name": "Publishing View",
			        		"description": "Include all channels preview.",
			        		"status": "Done"
			        	},{
			        		"id":2,
			        		"name": "Icon Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	},{
			        		"id":3,
			        		"name": "Media section",
			        		"description": "This section needs complete revamp.",
			        		"status": "Sent"
			        	},
			        	{
			        		"id":4,
			        		"name": "Reviewers Set",
			        		"description": "Needed a new icon set.",
			        		"status": "In Process"
			        	}
	        		]
	        	}
	        }
	    }
	],
	"activeProject": ""
}
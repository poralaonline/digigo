// Apps > Projects
import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";
import avatar5 from "@assets/images/users/avatar-5.jpg";
import avatar6 from "@assets/images/users/avatar-6.jpg";
import avatar7 from "@assets/images/users/avatar-7.jpg";
import avatar8 from "@assets/images/users/avatar-8.jpg";
import avatar9 from "@assets/images/users/avatar-9.jpg";
import avatar10 from "@assets/images/users/avatar-10.jpg";

import slack from "@assets/images/brands/slack.png";
import dribbble from "@assets/images/brands/dribbble.png";
import mail_chimp from "@assets/images/brands/mail_chimp.png";
import dropbox from "@assets/images/brands/dropbox.png";

// Projects > List
const projectWidgets1 = [{
    id: 1,
    time: "Updated 3hrs ago",
    img: slack,
    color: "warning",
    label: "Slack brand logo design",
    caption: "Create a Brand logo design for a velzon admin.",
    number: "18/42",
    progressBar: "34%",
    subItem: [{
        id: 1,
        imgFooter: avatar2
    },
    {
        id: 2,
        imgNumber: "+"
    },
    ],
    date: "10 Jul, 2021",
},
{
    id: 2,
    time: "Last update : 08 May",
    img: dribbble,
    color: "danger",
    label: "Redesign - Landing page",
    caption: "Resign a landing page design. as per abc minimal design.",
    number: "22/56",
    progressBar: "54%",
    subItem: [{
        id: 1,
        imgFooter: avatar3
    },
    {
        id: 2,
        imgNumber: "S",
        bgColor: "secondary"
    },
    {
        id: 3,
        imgFooter: avatar4
    },
    {
        id: 4,
        imgNumber: "+"
    },
    ],
    date: "18 May, 2021",
},
{
    id: 3,
    time: "Updated 2hrs ago",
    img: mail_chimp,
    color: "success",
    label: "Chat Application",
    caption: "Create a Chat application for business messaging needs. Collaborate efficiently with secure direct messages and group chats.",
    number: "14/20",
    progressBar: "65%",
    subItem: [{
        id: 1,
        imgFooter: avatar5
    },
    {
        id: 2,
        imgNumber: "M",
        bgColor: "warning"
    },
    {
        id: 3,
        imgNumber: "+"
    },
    ],
    date: "21 Feb, 2021",
},
{
    id: 4,
    time: "Last update : 21 Jun",
    img: dropbox,
    color: "info",
    label: "Project App",
    caption: "Create a project application for a project management and task management.",
    number: "20/34",
    progressBar: "78%",
    subItem: [{
        id: 1,
        imgNumber: "K",
        bgColor: "info"
    },
    {
        id: 2,
        imgNumber: "M",
        bgColor: "danger"
    },
    {
        id: 3,
        imgNumber: "+"
    },
    ],
    date: "03 Aug, 2021",
}];

const projectWidgets2 = [{
    id: 1,
    color: "danger",
    label: "Multipurpose landing template",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "18 Sep, 2021",
    subItem: [{
        id: 1,
        imgNumber: "D",
        bgColor: "danger"
    },
    {
        id: 2,
        imgTeam: avatar5
    },
    {
        id: 3,
        imgTeam: avatar6
    },
    {
        id: 4,
        imgNumber: "+"
    },
    ],
    progressBar: "50%",
},
{
    id: 2,
    color: "warning",
    label: "Dashboard UI",
    status: "Completed",
    statusClass: "success",
    deadline: "10 Jun, 2021",
    subItem: [{
        id: 1,
        imgTeam: avatar7
    },
    {
        id: 2,
        imgTeam: avatar8
    },
    {
        id: 3,
        imgNumber: "+"
    },
    ],
    progressBar: "95%",
},
{
    id: 3,
    color: "info",
    label: "Vector Images",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "08 Apr, 2021",
    subItem: [{
        id: 1,
        imgNumber: "C",
        bgColor: "info"
    },
    {
        id: 2,
        imgNumber: "+"
    },
    ],
    progressBar: "41%",
},
{
    id: 4,
    color: "success",
    label: "Authentication",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "22 Nov, 2021",
    subItem: [{
        id: 1,
        imgTeam: avatar8
    },
    {
        id: 2,
        imgNumber: "+"
    },
    ],
    progressBar: "35%",
}];

const projectWidgets3 = [{
    id: 1,
    img: dribbble,
    color: "secondary-subtle",
    label: "Kanban Board",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "08 Dec, 2021",
    number: "17/20",
    progressBar: "71%",
    subItem: [{
        id: 1,
        imgNumber: "D",
        bgColor: "danger"
    },
    {
        id: 2,
        imgTeam: avatar5
    },
    {
        id: 3,
        imgNumber: "+"
    },
    ],
},
{
    id: 2,
    img: slack,
    color: "light",
    label: "Ecommerce app",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "20 Nov, 2021",
    number: "11/45",
    progressBar: "20%",
    subItem: [{
        id: 1,
        imgTeam: avatar9
    },
    {
        id: 2,
        imgTeam: avatar10
    },
    {
        id: 3,
        imgNumber: "+"
    },
    ],
},
{
    id: 3,
    img: dropbox,
    color: "primary-subtle",
    label: "Redesign - Landing page",
    status: "Inprogress",
    statusClass: "warning",
    deadline: "10 Jul, 2021",
    number: "13/26",
    progressBar: "54%",
    subItem: [{
        id: 1,
        imgTeam: avatar3
    },
    {
        id: 2,
        imgNumber: "S",
        bgColor: "secondary"
    },
    {
        id: 3,
        imgTeam: avatar4
    },
    {
        id: 4,
        imgNumber: "+"
    },
    ],
},
{
    id: 4,
    img: mail_chimp,
    color: "danger-subtle",
    label: "Multipurpose landing template",
    status: "Completed",
    statusClass: "success",
    deadline: "18 Sep, 2021",
    number: "25/32",
    progressBar: "75%",
    subItem: [{
        id: 1,
        imgNumber: "D",
        bgColor: "danger"
    },
    {
        id: 2,
        imgTeam: avatar5
    },
    {
        id: 3,
        imgTeam: avatar6
    },
    {
        id: 4,
        imgNumber: "+"
    },
    ],
}];

export { projectWidgets1, projectWidgets2, projectWidgets3 };
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Professional
          <strong className="purple"> Experience </strong>
        </h1>
        <p style={{ color: "white" }}>Here are the projects I've worked on.</p>
        <div className="experience-info">
          <div className="role-company">
            <h3 className="role-heading">Frontend Developer</h3>
            <h4 className="company-heading">CODIIS Pvt. Ltd.</h4>
          </div>
          <div className="join-year">
            <p>June 2022 - Present</p> {/* Adjust year as needed */}
          </div>
        </div>

        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Jeddle - EdTech Product</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Enhanced Feedback System : Designed and implemented
                  messaging and reply features, improving communication between
                  students and instructors and increasing student engagement by
                  30%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Private Workspace Feature : Developed a private workspace
                  for students to create and manage portfolios, showcasing
                  achievements effectively and increasing portfolio usage by
                  40%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Performance Optimization : Converted all promises to
                  TanStack Query, reducing redundant backend API calls by 50%
                  and improving application performance by 35%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Unified Codebase for All Screens : Consolidated separate
                  codebases for mobile, tablet, laptop, and desktop into a
                  single responsive codebase, ensuring a consistent user
                  experience across all devices and reducing development time
                  for new features by 25%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Codebase Restructuring : Undertook a comprehensive
                  restructuring and refactoring of the entire codebase,
                  enhancing maintainability and modularity, resulting in a 20%
                  reduction in debugging time and increased overall development
                  efficiency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>HRMS - Human Resource Management System</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  • User-Centric Design : Played a pivotal role in crafting a
                  user-centric sidebar, profile page, and dashboard for the HRMS
                  application using ReactJS. This focus on usability led to a
                  25% decrease in user-reported navigation issues.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Global State Management & Routing : Orchestrated the
                  integration of global state management via Redux and
                  implemented routing through React-Router. This enhanced smooth
                  navigation and optimized data flow within the HRMS
                  application, contributing to a 40% reduction in data retrieval
                  time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Jeddle - EdTech Product</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Enhanced Feedback System: Designed and implemented messaging and reply features, improving communication between students and instructors and increasing student engagement by 30%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Private Workspace Feature: Developed a private workspace for students to create and manage portfolios, showcasing achievements effectively and increasing portfolio usage by 40%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Performance Optimization: Converted all promises to TanStack Query, reducing redundant backend API calls by 50% and improving application performance by 35%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Unified Codebase for All Screens: Consolidated separate codebases for mobile, tablet, laptop, and desktop into a single responsive codebase, ensuring a consistent user experience across all devices and reducing development time for new features by 25%.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Codebase Restructuring: Undertook a comprehensive restructuring and refactoring of the entire codebase, enhancing maintainability and modularity, resulting in a 20% reduction in debugging time and increased overall development efficiency.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Collaborative Development: Worked closely with a cross-functional team, including designers and backend developers, to ensure seamless integration and delivery of features.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • User Feedback Integration: Incorporated user feedback into the development process, leading to iterative improvements and a more user-centered final product.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>HRMS - Human Resource Management System</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  • User-Centric Design: Played a pivotal role in crafting a user-centric sidebar, profile page, and dashboard for the HRMS application using ReactJS. This focus on usability led to a 25% decrease in user-reported navigation issues.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Global State Management & Routing: Orchestrated the integration of global state management via Redux and implemented routing through React-Router. This enhanced smooth navigation and optimized data flow within the HRMS application, contributing to a 40% reduction in data retrieval time.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Automated Reporting: Implemented automated reporting features that allow HR managers to generate detailed reports on employee performance, attendance, and other metrics with a single click.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Role-Based Access Control: Developed a robust role-based access control system to ensure that different user roles (admin, manager, employee) have appropriate access to features and data.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Performance Metrics Dashboard: Created a performance metrics dashboard for real-time tracking of key performance indicators (KPIs) and user activity, enhancing decision-making for HR managers.
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  • Data Visualization: Integrated data visualization tools to present complex data in an easily understandable format, aiding in better analysis and reporting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

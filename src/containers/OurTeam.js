import '../Theme/Styles/OurTeam.css';

import { Container, Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ResponsiveAppBar from '../components/Appbar/ResponsiveAppBar';
import PersonCard from '../components/Cards/PersonCard';
import { getLandingDataAction } from '../redux/slices/landing';

function OurTeam({ members = [], teams = [], getLandingData }) {
  useEffect(() => {
    getLandingData();
  }, []);
  return (
    <>
      <ResponsiveAppBar mode="LANDING" />
      <Container maxWidth="md" style={{ marginTop: 160, marginBottom: 50 }}>
        <div className="our-team-page">
          <div className="tab-wrap">
            {teams.map((team, index) => (
              <>
                <input
                  type="radio"
                  id={'tab' + index}
                  name="tabGroup1"
                  className="tab"
                  defaultChecked={index === 0 ? 'checked' : ""}
                />
                <label htmlFor={'tab' + index}>{team}</label>
              </>
            ))}
            {teams.map((team) => (
              <div className="tab__content" key={team}>
                <Grid container spacing={2} justify="center">
                  {members
                    .filter((member) => member.team.includes(team))
                    .map((member, index) => (
                      <Grid
                        container
                        item
                        key={index}
                        xs={10}
                        sm={4}
                        md={3}
                        alignItems="flex-start"
                        justify="center">
                        <PersonCard person={member} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const mapStatesToProps = (state) => ({
  members: state.landing.members,
  teams: state.landing.teams
});

export default connect(mapStatesToProps, {
  getLandingData: getLandingDataAction,
})(OurTeam);

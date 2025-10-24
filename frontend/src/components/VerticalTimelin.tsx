import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CodeIcon from '@mui/icons-material/Code';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Tilt  from 'react-parallax-tilt';
import { FaTree } from 'react-icons/fa';

function VerticalTime() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Timeline position={`${isMobile ? 'right' : 'alternate'}`} >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
          fontSize={18}
          display={`${isMobile && 'none'}`} 
        >
          2022 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor: 'white'}} className='hover:scale-115 transition-all'>
            <LaptopMacIcon className='text-black'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='card-shadow px-5 md:px-10 bg-[#25291C] py-[20px] rounded-2xl border-5'>
              <div>
                <Typography variant="h6" component="span">Frontend Developer</Typography>
                <Typography>EduSkill Foundation | AWS Academy | AICTE</Typography>
              </div>

              <div>
                <ul className='list-disc'>
                  <li>Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.</li>
                  <li>also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          display={`${isMobile && 'none'}`}
        >
          2023 - 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector  sx={{ bgcolor: '#25291C' }}/>
          <TimelineDot sx={{bgcolor: "#25291C"}} color="primary" className='hover:scale-115 transition-all'>
            <CodeIcon/>
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: '#25291C' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='card-shadow px-10 bg-[#e3e7d3] py-[20px] rounded-2xl border-5 border-[#25291C] text-left text-[#25291C]'>
              <div>
                <Typography variant="h6" component="span">Frontend Developer</Typography>
                <Typography>EduSkill Foundation | AWS Academy | AICTE</Typography>
              </div>

              <div>
                <ul className='list-disc'>
                  <li>Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.</li>
                  <li>also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
         <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          display={`${isMobile && 'none'}`}
        >
          2023 - 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{bgcolor: "white"}} variant="outlined" className='hover:scale-115 transition-all text-[#25291C]'>
            <ImportantDevicesIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='px-10 card-shadow bg-[#e6e49f] py-[20px] rounded-2xl border-5 border-[var(--color-3)] text-black'>
              <div>
                <Typography variant="h6" component="span">Frontend Developer</Typography>
                <Typography>EduSkill Foundation | AWS Academy | AICTE</Typography>
              </div>

              <div>
                <ul className='list-disc'>
                  <li>Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.</li>
                  <li>also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.</li>
                </ul>
              </div>
            </div>
          </Tilt> 
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
         <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="white"
          display={`${isMobile && 'none'}`}
        >
          2023 - 2026
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: '#25291C' }} />
          <TimelineDot sx={{bgcolor: "#25291C"}} color="secondary" className='hover:scale-115 transition-all'>
            <FaTree />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: '#25291C' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} className={`${isMobile && 'w-[80%]'}`}>
          <Tilt>
            <div className='card-shadow px-10 bg-white py-[20px] rounded-2xl text-left border-5 text-black'>
              <div>
                <Typography variant="h6" component="span">Frontend Developer</Typography>
                <Typography>EduSkill Foundation | AWS Academy | AICTE</Typography>
              </div>

              <div>
                <ul className='list-disc'>
                  <li>Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.</li>
                  <li>also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.</li>
                </ul>
              </div>
            </div>
          </Tilt>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default VerticalTime
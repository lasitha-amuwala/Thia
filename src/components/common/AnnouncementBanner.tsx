// Code from https://arminydy.medium.com/how-to-add-in-app-messaging-banners-in-react-and-scale-it-9cd2f1ffb518
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

const AnnouncmentBanner = () => {
    const [showBanner, setShowBanner] = useState(true);

    return showBanner ? (
        <Box backgroundColor='thia.purple.700' color='#fff' padding='10px 20px' textAlign='center' width='100%' zIndex='999'>
            <Flex justifyContent='center' align='center'>
                <span>
                    ⚠️ Notice: This app is no longer being supported, as a result, backend features are disabled. The website remains online
                    as a portfolio project to showcase design and development work. Close this banner for a better UI experience. :)
                </span>
                <IconButton
                    onClick={() => setShowBanner(false)}
                    size='md'
                    fontSize='2xl'
                    aria-label={`Notice`}
                    variant='ghost'
                    color='current'
                    ml={{ base: '0', md: '3' }}
                    icon={<MdClose />}
                    borderRadius={100}
                    _focus={{ boxShadow: 'none' }}
                />
            </Flex>
        </Box>
    ) : (
        <></>
    );
};

export default AnnouncmentBanner;

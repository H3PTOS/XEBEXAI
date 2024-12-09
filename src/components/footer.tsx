import { FaInstagram } from 'react-icons/fa'
import { HStack, Link } from '@chakra-ui/react'

export default function Footer() {
    return (
        <HStack fontSize="sm">
            <Link href="https://www.instagram.com/kelvi__n_9" target="_blank" fontWeight="600">
                <FaInstagram/> Instagram
            </Link>
        </HStack>
    )
}

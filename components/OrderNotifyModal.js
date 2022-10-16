import { Button, Modal, Text, Center, Radio, View } from 'native-base';
import { useState } from 'react';

export default function OrderNotifyModal(props) {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [action, setAction] = useState(0);

  return (
    <Center>
      <Button onPress={() => { setIsOpen(true) }}>Test Notification</Button>
      <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }} >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Running Low!</Modal.Header>
          <Modal.Body>
            <View>
            <Text margin={3} fontSize={16}>It seems like you may be running low on coffee, what would you like to do?</Text>
            <Radio.Group name="orderActions" value={action} onChange={(value) => { setAction(value); }}>
              <Radio value={1} my={1}>
                Add to Cart
              </Radio>
              <Radio value={2} my={1}>
                Ask me in 3 days
              </Radio>
              <Radio value={3} my={1}>
                Remove from List
              </Radio>
            </Radio.Group>
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => { setIsOpen(false); }} bg="#52B69A" isDisabled={ action == 0 }> Confirm</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
    
  )
}
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import React from 'react';
import {Button, Text, View, ScrollView} from 'react-native';
import {
  MobileCore,
  Lifecycle,
  Signal,
  Event,
  Identity,
  LogLevel,
  PrivacyStatus,
} from '@adobe/react-native-aepcore';
import styles from '../styles/styles';
import {NavigationProps} from '../types/props';

import { Stack, useRouter } from 'expo-router';


function trackAction() {
  MobileCore.trackAction('action name', {key: 'value'});
}

function trackState() {
  MobileCore.trackState('state name', {key: 'value'});
}

function setPushIdentifier() {
  MobileCore.setPushIdentifier('xxx');
}

function collectPii() {
  MobileCore.collectPii({myPii: 'data'});
}

function dispatchEvent() {
  var event = new Event('eventName', 'eventType', 'eventSource', {
    testDataKey: 'testDataValue',
  });
  MobileCore.dispatchEvent(event);
}

function dispatchEventWithResponseCallback() {
  var event = new Event('eventName', 'eventType', 'eventSource', {
    testDataKey: 'testDataValue',
  });
  MobileCore.dispatchEventWithResponseCallback(event, 1500).then(responseEvent =>
    console.log('AdobeExperienceSDK: responseEvent = ' + responseEvent),
  );
}

function setAdvertisingIdentifier() {
  MobileCore.setAdvertisingIdentifier('adID');
}
function getSdkIdentities() {
  MobileCore.getSdkIdentities().then(identities =>
    console.log('AdobeExperienceSDK: Identities = ' + identities),
  );
}

function updateConfiguration() {
  MobileCore.updateConfiguration({'global.privacy': 'optedin'});
}

function clearUpdatedConfiguration() {
  MobileCore.clearUpdatedConfiguration();
}

function getLogLevel() {
  MobileCore.getLogLevel().then(level =>
    console.log('AdobeExperienceSDK: Log Level = ' + level),
  );
}

function setLogLevel() {
  MobileCore.setLogLevel(LogLevel.VERBOSE);
}

function lifecycleExtensionVersion() {
  Lifecycle.extensionVersion().then(version =>
    console.log('AdobeExperienceSDK: Lifecycle version: ' + version),
  );
}

function identityExtensionVersion() {
  Identity.extensionVersion().then(version =>
    console.log('AdobeExperienceSDK: Identity version: ' + version),
  );
}

function signalExtensionVersion() {
  Signal.extensionVersion().then(version =>
    console.log('AdobeExperienceSDK: Signal version: ' + version),
  );
}

function coreExtensionVersion() {
  MobileCore.extensionVersion().then(version =>
    console.log('AdobeExperienceSDK: MobileCore version: ' + version),
  );
}

function setPrivacyOptIn() {
  MobileCore.setPrivacyStatus(PrivacyStatus.OPT_OUT);
}

function getPrivacyStatus() {
  MobileCore.getPrivacyStatus().then(status =>
    console.log('AdobeExperienceSDK: Privacy Status = ' + status),
  );
}

function resetIdentities() {
  MobileCore.resetIdentities();
}

const CoreView = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{marginTop: 75, paddingBottom: 100}}>
        <Button onPress={() => router.back()} title="Go to main page" />
        <Text style={styles.welcome}>Core</Text>
        <Button title="extensionVersion()" onPress={coreExtensionVersion} />
        <Button title="updateConfiguration" onPress={updateConfiguration} />
        <Button title="clearUpdatedConfiguration" onPress={clearUpdatedConfiguration} />
        <Button title="setPrivacyStatus(OptIn)" onPress={setPrivacyOptIn} />
        <Button title="getPrivacyStatus()" onPress={getPrivacyStatus} />
        <Button title="setLogLevel(LogLevel.VERBOSE)" onPress={setLogLevel} />
        <Button title="getLogLevel()" onPress={getLogLevel} />
        <Button title="setPushIdentifier()" onPress={setPushIdentifier} />
        <Button
          title="setAdvertisingIdentifier()"
          onPress={setAdvertisingIdentifier}
        />
        <Button title="getSdkIdentities()" onPress={getSdkIdentities} />
        <Button title="collectPii()" onPress={collectPii} />
        <Button title="trackAction()" onPress={trackAction} />
        <Button title="trackState()" onPress={trackState} />
        <Button title="dispatchEvent()" onPress={dispatchEvent} />
        <Button
          title="dispatchEventWithResponseCallback()"
          onPress={dispatchEventWithResponseCallback}
        />
        <Button title="resetIdentities()" onPress={resetIdentities} />
        <Text style={styles.welcome}>Lifecycle</Text>
        <Button
          title="Lifecycle::extensionVersion()"
          onPress={lifecycleExtensionVersion}
        />
        <Text style={styles.welcome}>Signal</Text>
        <Button
          title="Signal::extensionVersion()"
          onPress={signalExtensionVersion}
        />
      </ScrollView>
    </View>
  );
};

export default CoreView;
